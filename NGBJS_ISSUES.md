# NgbJS issues

This file tracks library behavior discovered while building the documentation application.

## NAV-001: `ngb-nav-link` cancels UI-Router transitions on anchors

- Status: Open
- Area: Nav
- Type: Integration edge case
- Affects: `<a ngb-nav-link ui-sref="...">`

### Reproduction

```html
<ul ngb-nav>
    <li ngb-nav-item="docs.dashboard.accordion.api">
        <a ngb-nav-link ui-sref="docs.dashboard.accordion.api">API</a>
    </li>
</ul>
```

### Actual behavior

The nav item becomes active, but UI-Router does not complete the state transition.

### Expected behavior

The nav item should become active and UI-Router should navigate to the state referenced by `ui-sref`.

### Cause

`ui-sref` schedules the transition and replaces `event.preventDefault()` so a later call can cancel it. The anchor branch of `NgbNavLink.$postLink()` then clears the generated `href` and calls `event.preventDefault()`, canceling the pending transition.

Relevant implementation:

```ts
this.$element.attr("href", "");

this._clickHandler = (event) => {
    event.preventDefault();
    this.$scope.$evalAsync(() => this.ngbNav.click(this.ngbNavItem));
};
```

Source: `node_modules/ngb-js/src/nav/ngb-nav-link.directive.ts`

### Current workaround

Use a button as the NgbJS nav link and keep `ui-sref` on that button:

```html
<button type="button" ngb-nav-link ui-sref="docs.dashboard.accordion.api">
    API
</button>
```

The button branch does not call `preventDefault()`, so UI-Router completes the transition.

### Possible correction points

- Do not overwrite an existing or generated `href`.
- Only prevent the anchor's default behavior when no external navigation directive is controlling it.
- Provide an explicit router-link-compatible mode.
- Add an integration test covering `ngb-nav-link` and `ui-sref` on the same anchor.

## DROPDOWN-001: `animation` binding is exposed but unused

- Status: Open
- Area: Dropdown
- Type: Public API inconsistency
- Affects: `ngb-dropdown`

### Actual behavior

The directive factory exposes an optional one-way `animation` binding, but
`NgbDropdown` does not declare, initialize or read that value. Changing the
binding has no runtime effect.

Relevant implementation:

```ts
bindToController: {
    autoClose: "<?",
    animation: "<?",
    // ...
}
```

Source: `src/dropdown/ngb-dropdown.directive.ts`

### Expected behavior

Either the binding should control an animation behavior, or it should be
removed from the public directive contract.

## SCROLLSPY-001: the last fragments may never become active at the bottom

- Status: Open
- Area: ScrollSpy
- Type: End-of-container edge case
- Affects: `ngb-scroll-spy` with consecutive short fragments, especially when using a negative bottom `rootMargin`

### Reproduction

Use a scroll container with several registered fragments and reduce the
observer's effective activation area from the bottom:

```html
<div ngb-scroll-spy root-margin="0px 0px -60%">
    <!-- preceding fragments -->
    <section ngb-scroll-spy-fragment="toggle">...</section>
    <section ngb-scroll-spy-fragment="body">...</section>
    <section ngb-scroll-spy-fragment="config">...</section>
</div>
```

Make the final fragments short enough that, at the maximum scroll position,
part of `toggle` still intersects the effective observer root and `config`
starts below it.

### Actual behavior

At the bottom of the container, the active fragment remains `toggle`. The
visible `body` fragment does not become active, and `config` can never become
active through scrolling.

### Expected behavior

Reaching the bottom of the scroll container should allow the final visible
fragment, or the final registered fragment, to become active even when the
preceding fragment cannot fully leave the effective observer root.

### Cause

`defaultProcessChanges` keeps all intersecting fragments in
`visibleFragments`, then selects the first one in DOM order:

```ts
for (const fragment of orderedFragments) {
  if (visibleFragments.has(fragment)) {
    changeActive(fragment.id);
    break;
  }
}
```

At the maximum scroll position there is no special handling for the bottom of
the root. Therefore, a small remaining intersection from an earlier fragment
wins over later visible fragments. A negative bottom `rootMargin` also means a
short final fragment may never enter the effective root when there is not
enough trailing space.

Source: `src/scrollspy/scrollspy.utils.ts`

### Possible correction points

- Detect that the root reached its maximum scroll position and prefer the last
  applicable registered fragment.
- Resolve the active fragment using scroll direction and intersection geometry
  instead of always selecting the first intersecting fragment in DOM order.
- Add coverage for multiple short terminal fragments with a negative bottom
  `rootMargin`.
