# NgbJS issues

This file tracks library behavior discovered while building the documentation application.

## NAV-001: `ngb-nav-link` cancels UI-Router transitions on anchors

- Status: Done
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

## TOOLTIP-001: closed tooltip windows remain in the DOM

- Status: Open
- Area: Tooltip / Popup
- Type: DOM lifecycle leak
- Affects: `ngb-tooltip`, including repeated hover interactions

### Reproduction

Add an element with a tooltip, then repeatedly enter and leave the host:

```html
<button ngb-tooltip="'Copy to clipboard'">Copy</button>
```

After every `mouseleave`, inspect the tooltip container in DevTools.

### Actual behavior

The tooltip is visually closed and `NgbTooltip.isOpen()` becomes `false`, but
the corresponding `<ngb-tooltip-window>` remains attached to the DOM. Opening
the tooltip again creates and appends another window, so the nodes accumulate.

### Expected behavior

Once the closing transition finishes, the tooltip window and its content
should both be destroyed and removed from the DOM.

### Cause

`NgbTooltip` delegates closing to `PopupService.close()`. The popup service
destroys the projected content and the window scope, then clears its internal
reference:

```ts
this._contentRef?.destroy();
this._contentRef = null;

this._windowRef?.$scope?.$destroy();
this._windowRef = null;
```

The window was appended manually by `NgbTooltip._applyContainer()`, but the
close path never calls `$element.remove()` or `ContentRef.destroy()` on the
window. Destroying an AngularJS scope does not remove a manually appended DOM
node.

Source: `src/utils/popup.service.ts`

The existing tooltip close test verifies `isOpen()`, but does not assert that
`.tooltip` or `ngb-tooltip-window` is absent after closing.

### Possible correction points

- Remove the window element before clearing `_windowRef`.
- Make `ContentRef.destroy()` own both scope destruction and DOM removal, then
  use it consistently for popup windows.
- Extend the close and repeated-hover tests to assert that closed window nodes
  do not remain in the document.

## CAROUSEL-001: manual cycle state can disagree with effective pause state

- Status: Needs decision
- Area: Carousel
- Type: Behavioral edge case inherited from ng-bootstrap
- Affects: `pause()`, `cycle()`, `pauseOnFocus`, `pauseOnHover` and navigation-driven controls

### Reproduction

Enable `pauseOnFocus`, manually call `pause()`, and configure the slide callback
to call `cycle()` when navigation comes from an arrow:

```ts
public onSlide(event: NgbSlideEvent) {
    const isArrow = event.source === "arrowLeft" || event.source === "arrowRight";

    if (isArrow) {
        this.carousel.cycle();
    }
}
```

Click either navigation arrow while the carousel is manually paused.

### Actual behavior

The manual pause is cleared, but automatic cycling does not resume while focus
remains inside the carousel. Both arrows call `focus()` before changing slides,
so `pauseOnFocus` continues to hold the effective interval at zero.

The same distinction applies to hover: calling `cycle()` while the pointer is
inside a carousel with `pauseOnHover` enabled does not resume the timer until
the pointer leaves.

The `paused` value emitted by `slide` and `slid` reports only the manual
`pause()` state. It does not report the effective pause caused by focus, hover,
the last slide when `wrap` is disabled, or an interval of zero.

### Cause

The timer combines several independent conditions:

```ts
pause ||
    (pauseOnHover && mouseHover) ||
    (pauseOnFocus && focused) ||
    !hasNextSlide
    ? 0
    : interval
```

`pause()` and `cycle()` only change the first condition through `_pause$`.
Navigation arrows and indicators also focus the carousel before selecting a
slide.

This matches the current ng-bootstrap implementation, whose `paused` event
field explicitly represents whether `pause()` was called without a later
`cycle()` call. It is therefore not currently classified as a port regression.

Source: `src/carousel/ngb-carousel.component.ts`

### Related navigation limitation

The `slide` callback is emitted only when the selected slide differs from the
active slide. Consequently, behavior composed from `event.source` cannot react
when the active indicator is clicked, or when an arrow points past a boundary
with `wrap` disabled.

### Possible correction points

- Keep the library semantics and make documentation examples distinguish
  manual pause from effective focus and hover pauses.
- Avoid offering "unpause on arrow" together with `pauseOnFocus`, or define
  which option takes precedence.
- Add a separate navigation interaction output if consumers need to observe
  clicks that do not produce a slide transition.
- Add tests covering pause/cycle combined with hover, focus, indicators,
  arrows and `wrap=false`; the current carousel tests do not cover pause state.

## NAV-002: global vertical orientation misses its host bindings

- Status: Open
- Area: Nav
- Type: Lifecycle ordering
- Affects: `NgbNavConfig.orientation = "vertical"` when no local `orientation` binding is provided

### Actual behavior

The nav controller receives the global vertical orientation, so its keyboard
logic treats the nav as vertical. However, the host does not receive the
`flex-column` class or `aria-orientation="vertical"`.

### Expected behavior

Global and local orientation values should produce the same host classes and
ARIA attributes.

### Cause

`$onInit()` copies `orientation` from `NgbNavConfig`, while the corresponding
host bindings are applied only from `$onChanges()`:

```ts
$onInit(): void {
  this.orientation ??= this.config.orientation;
}

$onChanges(): void {
  this.$element.toggleClass("flex-column", this.orientation === "vertical");
  // aria-orientation is also applied here
}
```

For an omitted local binding, the initial `$onChanges()` runs before the config
fallback is assigned in `$onInit()`, and no later binding change triggers it
again.

Source: `src/nav/ngb-nav.directive.ts`

### Current documentation workaround

Add Bootstrap's `flex-column` class explicitly to a nav that receives vertical
orientation from global configuration. This fixes the visual direction, but
the missing `aria-orientation` still belongs to the library.

### Possible correction points

- Apply orientation host bindings after resolving config defaults in
  `$onInit()` or `$postLink()`.
- Extract the orientation host update into one method used from both lifecycle
  hooks.
- Add a test for `NgbNavConfig.orientation = "vertical"` without a local input.

## OFFCANVAS-001: exported updatable options have no public update path

- Status: Open
- Area: Offcanvas
- Type: Public API inconsistency
- Affects: `NgbOffcanvasUpdatableOptions`

### Actual behavior

The library exports `NgbOffcanvasUpdatableOptions`, and the internal panel and
backdrop components implement `updateOptions()`. However,
`NgbOffcanvasRef` and `NgbActiveOffcanvas` expose only `close()` and
`dismiss()`. Consumers cannot update an open offcanvas through the public API.

### Expected behavior

Either expose `update(options)` through the public reference and active
offcanvas, as Modal does, or remove the unreachable updatable contract.

Source: `src/offcanvas/ngb-offcanvas-ref.ts`

### Possible correction points

- Add `update()` to `NgbOffcanvasRef` and `NgbActiveOffcanvas`, forwarding
  changes to both the panel and backdrop.
- Wire the active instance in `NgbOffcanvasStack.open()`.
- Add tests for ARIA attributes, position, keyboard, panel class and backdrop
  class updates after opening.

## OFFCANVAS-002: component bindings serialize values as expressions

- Status: Open
- Area: Offcanvas
- Type: Component content binding bug
- Affects: `NgbOffcanvas.open(component, { bindings })`

### Actual behavior

The stack creates component attributes from binding values:

```ts
Object.entries(options.bindings || {}).map(
  ([key, value]) => `${camelToKebabCase(key)}="${value}"`,
);
```

A binding such as `{ title: "Component content" }` becomes
`title="Component content"`, which is parsed as an AngularJS expression rather
than reading the `title` value copied onto the content scope. Object values are
serialized as `[object Object]` and are also unusable.

### Expected behavior

As in the Modal stack, each generated attribute should reference its binding
key after the bindings object is copied onto the content scope:

```ts
Object.keys(options.bindings || {}).map(
  (key) => `${camelToKebabCase(key)}="${key}"`,
);
```

Source: `src/offcanvas/ngb-offcanvas-stack.service.ts`

## OFFCANVAS-003: multiple panels overwrite singular active tracking

- Status: Needs decision
- Area: Offcanvas
- Type: Unsupported stacking edge case inherited from ng-bootstrap
- Affects: opening another offcanvas while one is already open

### Actual behavior

Each new panel replaces `_offcanvasRef` and `_panelRef`. The earlier panel can
remain in the DOM, but `dismiss()`, `activeInstance` and the focus trap track
only the newest one. Closing an older reference can also clear the shared
active state while a newer panel remains open.

### Expected behavior

The documentation should treat Offcanvas as a single-active-instance service.
If stacking is intended as an NgbJS extension, the internal state must become a
collection with deterministic focus, backdrop and dismissal behavior.

Source: `src/offcanvas/ngb-offcanvas-stack.service.ts`

## RATING-001: `NgbRating` does not integrate with `ng-model`

- Status: Open
- Area: Rating
- Type: Forms integration gap
- Affects: `<ngb-rating ng-model="...">`

### Actual behavior

The component exposes `rate` and `rateChange`, but its factory does not require
an optional `ngModelController`. Adding `ng-model` creates a form control that
the rating never reads from or writes to.

```ts
bindings: {
  rate: "<?",
  rateChange: "&?",
  // ...
},
require: {
  ngDisabled: "?ngDisabled",
},
```

### Expected behavior

`ng-model` should be sufficient to use the rating as an AngularJS form
control, including model updates, touched state, disabled state and form
validation.

Source: `src/rating/ngb-rating.component.ts`

### Current documentation workaround

Connect `rate` and `rate-change` to the same model used by a form control. This
keeps the value and validation synchronized, but does not make the rating
itself a native AngularJS form control.

### Possible correction points

- Require `?ngModel` and implement `$render`, `$setViewValue()` and touched
  state handling.
- Preserve `rate` / `rate-change` for callback-style usage while defining how
  they interact with `ng-model` when both are present.
- Add tests for programmatic model changes, keyboard changes, resettable
  ratings, validation and disabled controls.
