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
