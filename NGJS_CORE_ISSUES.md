# ngjs-core issues

This file tracks behavior originating in `ngjs-core` that was discovered while
building the NgbJS documentation application.

## CORE-001: `ng-ref-read` is ignored by string-based `ViewChild` queries

- Status: Open
- Area: References / View queries
- Type: Reference resolution inconsistency
- Affects: `@ViewChild("reference")` combined with `ng-ref-read`

### Reproduction

```html
<div
    ngb-accordion
    ng-ref="accordion"
    ng-ref-read="ngbAccordion">
</div>
```

```ts
@ViewChild("accordion")
private accordion!: NgbAccordion;

this.accordion.collapseAll();
```

The same behavior occurs with an NgbJS component controller:

```html
<ngb-alert ng-ref="alert" ng-ref-read="ngbAlert"></ngb-alert>
```

```ts
@ViewChild("alert")
private alert!: INgbAlert;

this.alert.close();
```

### Actual behavior

The queried value is an `ElementRef`, so calling controller methods produces:

```text
TypeError: this.accordion.collapseAll is not a function
TypeError: this.alert.close is not a function
```

### Expected behavior

`ng-ref-read="ngbAccordion"` and `ng-ref-read="ngbAlert"` should make the
corresponding controller the value resolved by the string-based `ViewChild`.

### Cause

`TemplateNgRef` resolves two different values:

```ts
const defaultValue = templateRef ?? nativeEl;
const value = read ? (cases[read] ?? directiveController) : defaultValue;
```

The requested `value` is assigned to the AngularJS scope. However, the view
query registry is connected with `defaultValue` instead:

```ts
connectReference(attrs.ngRef, defaultValue, candidates, linkedNative);
```

For `@ViewChild("accordion")`, the query locator is a string and has no
explicit `read` token. `resolveFirst()` therefore asks the reference store for
an undefined read token, and `QueryReferenceStore.read()` returns
`reference.defaultValue`, which is the element rather than the controller.

Sources:

- `src/core/ng-ref.ts`
- `src/core/queries/query-resolver.ts`
- `src/core/queries/reference-store.ts`

### Possible correction points

- Connect the resolved `value` as the reference default when `ng-ref-read` is
  present.
- Preserve the element as a candidate so explicit `read: ElementRef` queries
  continue to work.
- Add tests for directive and component controllers queried through a string
  reference with `ng-ref-read`.

## CORE-002: `detectChanges()` can start a nested digest from a child scope

- Status: Open
- Area: Change detection
- Type: AngularJS digest integration
- Affects: `ChangeDetectorRef.detectChanges()` invoked during an active root digest

### Reproduction

Switch an NgbJS nav tab. `NgbNavOutlet` receives `navItemChange$` and calls:

```ts
this._changeDetector.detectChanges();
```

### Actual behavior

AngularJS reports:

```text
Uncaught Error: [$rootScope:inprog] $digest already in progress
    at ChangeDetectorRef.detectChanges
    at NgbNavOutlet
```

### Expected behavior

`detectChanges()` should not start another digest while AngularJS is already
processing one. It should reuse or safely defer to the active cycle.

### Cause

The current guard checks the controller's local scope:

```ts
detectChanges(): void {
  if (this.destroyed || this.scope.$$phase) return;
  this.scope.$digest();
}
```

During a root digest, the active phase is exposed through
`this.scope.$root.$$phase`. A child scope can therefore have no local
`$$phase`, pass the guard and call `$digest()` while the root digest is still
running.

Source: `src/core/change-detector-ref.ts`

### Possible correction points

- Guard against `this.scope.$root.$$phase` before calling `$digest()`.
- Define whether `detectChanges()` should defer through `$evalAsync` when a
  digest is active.
- Add a test invoking `detectChanges()` on a child scope during a root digest.

## CORE-003: Injectable overrides cannot be scoped to a component instance

- Status: Open
- Area: Dependency injection / Component providers
- Type: Missing instance-level provider scope
- Affects: Components that need different implementations of the same service

### Reproduction

`NgbTimepicker` injects `NgbTimepickerI18n` to obtain its meridian labels:

```ts
constructor(public readonly i18n: NgbTimepickerI18n) {}
```

Replacing the implementation is currently done at module level:

```ts
AppModule.service(NgbTimepickerI18n.$name, CustomTimepickerI18n);
```

Render two timepickers that require different period labels:

```html
<ngb-timepicker ng-model="englishTime" meridian="true"></ngb-timepicker>
<ngb-timepicker ng-model="greekTime" meridian="true"></ngb-timepicker>
```

### Actual behavior

AngularJS resolves both components through the same application injector. The
custom `NgbTimepickerI18n` service is therefore shared by every timepicker, so
both instances receive the same labels.

The same limitation applies to other replaceable dependencies such as
`NgbTimeAdapter`: an override changes the model representation for every
timepicker in the application.

### Expected behavior

A component should be able to declare an instance-scoped provider or injector
override. Each component instance and its descendants should resolve that
local implementation while components outside the subtree continue using the
application default.

Conceptually:

```ts
{
  provide: NgbTimepickerI18n,
  useClass: CustomTimepickerI18n,
}
```

### Cause

`ngjs-core` currently integrates component controllers with AngularJS's module
injector but does not expose a child-injector or component-provider mechanism.
Service registrations consequently remain application-wide singletons.

Relevant areas:

- `src/core`
- AngularJS component/controller creation and dependency resolution

### Possible correction points

- Add component-level `providers` metadata with a child injector per component
  instance.
- Resolve local providers before falling back to the parent/application
  injector.
- Make the local injector available to descendant directives and components.
- Destroy instance-scoped services with their owning component.
- Add tests with two sibling components overriding the same token independently.
