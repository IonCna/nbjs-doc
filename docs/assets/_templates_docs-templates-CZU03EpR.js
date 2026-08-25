import{n as e,t}from"./angular-noCWnJ_q.js";e(t()).default.module(`docs.templates`,[]).run([`$templateCache`,function(e){e.put(`src/app/shared/components/page-outline/page-outline.component.html`,`<aside class="position-sticky top-0 px-4 py-4">
    <nav ngb-scroll-spy-menu aria-label="On this page">
        <h2 class="small fw-semibold text-body-secondary mb-2">On this page</h2>

        <div class="nav nav-underline flex-column align-items-start">
            <button
                class="nav-link rounded-0 px-0 py-1 text-start small"
                type="button"
                ng-repeat="section in $.sections track by section.id"
                ngb-scroll-spy-item="{{ section.id }}">
                {{ section.name }}
            </button>
        </div>
    </nav>

    <div ng-if="$.bootstrapHref || $.ngBootstrapHref">
        <hr class="my-3">

        <h2 class="small fw-semibold text-body-secondary mb-2">Official references</h2>

        <nav class="nav flex-column" aria-label="Related documentation">
            <a
                class="nav-link d-flex align-items-center gap-2 px-0 py-1 small"
                ng-if="$.bootstrapHref"
                ng-href="{{ $.bootstrapHref }}"
                target="_blank"
                rel="noopener noreferrer">
                <span>Bootstrap documentation</span>
                <i class="bi bi-box-arrow-up-right small" aria-hidden="true"></i>
            </a>

            <a
                class="nav-link d-flex align-items-center gap-2 px-0 py-1 small"
                ng-if="$.ngBootstrapHref"
                ng-href="{{ $.ngBootstrapHref }}"
                target="_blank"
                rel="noopener noreferrer">
                <span>ng-bootstrap documentation</span>
                <i class="bi bi-box-arrow-up-right small" aria-hidden="true"></i>
            </a>
        </nav>
    </div>
</aside>
`),e.put(`src/app/features/lib/pages/typeahead-examples-page/typeahead-examples-page.component.html`,`<docs-example-section fragment="simple-typeahead" title="Simple Typeahead" description="Debounce a local string search, require two characters and limit the result set." html-code="$.examples.simple.html" ts-code="$.examples.simple.typescript">
    <docs-simple-typeahead></docs-simple-typeahead>
</docs-example-section>

<docs-example-section fragment="focus-typeahead" title="Open on focus" description="Merge an explicit focus stream with user input so an empty field can display suggestions immediately." html-code="$.examples.focus.html" ts-code="$.examples.focus.typescript">
    <docs-focus-typeahead></docs-focus-typeahead>
</docs-example-section>

<docs-example-section fragment="formatted-typeahead" title="Formatted results" description="Transform result labels without changing the selected model value." html-code="$.examples.formatted.html" ts-code="$.examples.formatted.typescript">
    <docs-formatted-typeahead></docs-formatted-typeahead>
</docs-example-section>

<docs-example-section fragment="exact-typeahead" title="Select on exact" description="Select an object automatically when its formatted label is the only exact match." html-code="$.examples.exact.html" ts-code="$.examples.exact.typescript">
    <docs-exact-typeahead></docs-exact-typeahead>
</docs-example-section>

<docs-example-section fragment="wikipedia-typeahead" title="Wikipedia search" description="Retrieve remote suggestions through AngularJS $http with debounce, stale-response switching and error feedback." html-code="$.examples.wikipedia.html" ts-code="$.examples.wikipedia.typescript">
    <docs-wikipedia-typeahead></docs-wikipedia-typeahead>
</docs-example-section>

<docs-example-section fragment="template-results-typeahead" title="Template for results" description="Render object results with a custom template, contextual term highlighting and additional metadata." html-code="$.examples.templateResults.html" ts-code="$.examples.templateResults.typescript">
    <docs-template-results-typeahead></docs-template-results-typeahead>
</docs-example-section>

<docs-example-section fragment="non-editable-typeahead" title="Prevent manual entry" description="Keep the model null until the user chooses a valid object from the suggestion list." html-code="$.examples.nonEditable.html" ts-code="$.examples.nonEditable.typescript">
    <docs-non-editable-typeahead></docs-non-editable-typeahead>
</docs-example-section>

<docs-example-section fragment="typeahead-global" title="Global configuration of typeaheads" description="Configure hint completion, exact selection and body container defaults through NgbTypeaheadConfig." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-typeahead-global></docs-typeahead-global>
</docs-example-section>
`),e.put(`src/app/shared/components/title-heading/title-heading.component.html`,`<header class="mb-4 mb-lg-5" ng-if="$.visible">
    <div class="pt-2 pb-4">
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-0">
            {{ $.title }}
        </h1>
    </div>

    <nav class="overflow-x-auto border-bottom" ng-attr-aria-label="{{ $.title }} sections">
        <ul
            class="nav-underline flex-nowrap gap-4 mb-0"
            ngb-nav
            active-id="$.titleService.currentTab">
            <li
                ng-repeat="tab in $.tabs track by tab.to"
                ngb-nav-item="{{ tab.to }}">
                <a
                    type="button"
                    class="text-nowrap px-1 py-3 fw-semibold"
                    ngb-nav-link
                    ui-sref="{{ tab.to }}">
                    {{ tab.name }}
                </a>
            </li>
        </ul>
    </nav>
</header>
`),e.put(`src/app/shared/components/example-section/example-section.component.html`,`<section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="{{ example.fragment }}">
    <header class="d-flex align-items-start justify-content-between gap-3 mb-4">
        <div>
            <h2 class="h3 mb-2">{{ example.title }}</h2>
            <p class="text-body-secondary mb-0">{{ example.description }}</p>
        </div>

        <button
            type="button"
            class="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
            ng-click="example.toggleCode()"
            ng-attr-aria-expanded="{{ !example.codeCollapsed }}"
            ng-attr-aria-controls="{{ example.fragment }}-code">
            <i class="bi bi-code-slash" aria-hidden="true"></i>
            <span>{{ example.codeCollapsed ? 'View code' : 'Hide code' }}</span>
        </button>
    </header>

    <ng-content></ng-content>

    <div
        class="mt-4"
        ngb-collapse="example.codeCollapsed"
        ng-attr-id="{{ example.fragment }}-code">
        <div class="border rounded-3 overflow-hidden">
            <div ng-if="!example.hasAdditionalCode">
                <div class="d-flex align-items-center justify-content-between bg-body-tertiary border-bottom ps-3 pe-2 py-1">
                    <span class="small fw-semibold">HTML</span>
                    <docs-copy-button
                        value="example.htmlCode"
                        button-class="text-body-secondary"
                        aria-label="Copy HTML code">
                    </docs-copy-button>
                </div>
                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.htmlCode"></code></pre>
            </div>

            <div ng-if="example.hasAdditionalCode">
                <div class="d-flex align-items-end justify-content-between bg-body-tertiary border-bottom pe-2">
                    <ul
                        class="nav nav-tabs border-bottom-0 px-3 pt-2"
                        ngb-nav
                        active-id="example.activeTab"
                        animation="false"
                        ng-ref="example.codeNav"
                        ng-ref-read="ngbNav">
                        <li ngb-nav-item="html">
                            <button type="button" ngb-nav-link>HTML</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.htmlCode"></code></pre>
                            </ng-template>
                        </li>
                        <li ng-if="example.tsCode" ngb-nav-item="typescript">
                            <button type="button" ngb-nav-link>TypeScript</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.tsCode"></code></pre>
                            </ng-template>
                        </li>
                        <li ng-if="example.cssCode" ngb-nav-item="css">
                            <button type="button" ngb-nav-link>CSS</button>
                            <ng-template ngb-nav-content>
                                <pre class="bg-body-tertiary m-0 p-3 overflow-auto"><code ng-bind="example.cssCode"></code></pre>
                            </ng-template>
                        </li>
                    </ul>

                    <docs-copy-button
                        value="example.activeCode"
                        button-class="text-body-secondary"
                        aria-label="Copy active code">
                    </docs-copy-button>
                </div>
                <div ngb-nav-outlet="example.codeNav"></div>
            </div>
        </div>
    </div>
</section>
`),e.put(`src/app/features/lib/pages/typeahead-api-page/typeahead-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-typeahead">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbTypeahead</code></h2><p class="text-body-secondary mb-0">Connects an input to an observable result source and manages the suggestion popup.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;input ng-model="value" ngb-typeahead="search"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-typeahead</code></td><td><code>&lt;?</code></td><td>Required</td><td>Function that maps the text stream to an observable result collection.</td></tr>
            <tr><td><code>autocomplete</code></td><td><code>&lt;?</code></td><td>—</td><td>Sets the native autocomplete behavior.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>$config.container</code></td><td>Container used for the popup.</td></tr>
            <tr><td><code>editable</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Allows values not present in the results.</td></tr>
            <tr><td><code>focus-first</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Activates the first result when the popup opens.</td></tr>
            <tr><td><code>input-formatter</code></td><td><code>&lt;?</code></td><td>String conversion</td><td>Formats the selected model in the input.</td></tr>
            <tr><td><code>result-formatter</code></td><td><code>&lt;?</code></td><td>String conversion</td><td>Formats values in the result list.</td></tr>
            <tr><td><code>result-template</code></td><td><code>&lt;?</code></td><td>Default result</td><td>Provides custom result markup.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
            <tr><td><code>popup-class</code></td><td><code>&lt;?</code></td><td>—</td><td>Adds a class to the results popup.</td></tr>
            <tr><td><code>select-on-exact</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Selects automatically when only one exact result exists.</td></tr>
            <tr><td><code>show-hint</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Shows the completion hint.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>select-item</code></td><td><code>&amp;?</code></td><td><code>$event: NgbTypeaheadSelectItemEvent</code></td><td>A result is selected.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-highlight">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbHighlight</code></h2><p class="text-body-secondary mb-0">Highlights matching portions of a result label.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-highlight result="label" term="query"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>result</code></td><td><code>&lt;</code></td><td><code>string</code></td><td>Required</td></tr>
        <tr><td><code>term</code></td><td><code>&lt;</code></td><td><code>string</code></td><td>Required</td></tr>
        <tr><td><code>highlight-class</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"ngb-highlight"</code></td></tr>
        <tr><td><code>accent-sensitive</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-typeahead-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTypeaheadConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide typeahead defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>container</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>editable</code>, <code>focusFirst</code></td><td><code>true</code></td></tr>
        <tr><td><code>selectOnExact</code>, <code>showHint</code></td><td><code>false</code></td></tr>
        <tr><td><code>placement</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/shared/components/copy-button/copy-button.component.html`,`<ng-template ng-ref="copyTooltip">
    <span>{{ copyButton.copied ? "Copied" : "Copy to clipboard" }}</span>
</ng-template>

<button
    type="button"
    class="btn btn-link d-inline-flex align-items-center justify-content-center p-2 lh-1 {{ copyButton.buttonClass }}"
    ng-click="copyButton.copy()"
    ngb-tooltip="copyTooltip"
    placement="'top'"
    ng-attr-aria-label="{{ copyButton.copied ? 'Copied' : (copyButton.ariaLabel || 'Copy to clipboard') }}">
    <i
        class="bi fs-5"
        ng-class="copyButton.copied ? 'bi-check-lg text-success' : 'bi-clipboard'"
        aria-hidden="true">
    </i>
</button>
`),e.put(`src/app/features/lib/pages/tooltip-examples-page/tooltip-examples-page.component.html`,`<docs-example-section fragment="tooltip-placements" title="Quick and easy tooltips" description="Use the four primary Bootstrap placements with the default hover and focus triggers." html-code="$.examples.placements.html" ts-code="$.examples.placements.typescript">
    <docs-tooltip-placements></docs-tooltip-placements>
</docs-example-section>

<docs-example-section fragment="tooltip-template" title="HTML and bindings in tooltips" description="Render an ng-template as tooltip content and keep its bindings synchronized." html-code="$.examples.template.html" ts-code="$.examples.template.typescript">
    <docs-tooltip-template></docs-tooltip-template>
</docs-example-section>

<docs-example-section fragment="tooltip-triggers" title="Custom and manual triggers" description="Pair custom DOM events or control a tooltip directly through its public controller." html-code="$.examples.triggers.html" ts-code="$.examples.triggers.typescript">
    <docs-tooltip-triggers></docs-tooltip-triggers>
</docs-example-section>

<docs-example-section fragment="tooltip-autoclose" title="Automatic closing with keyboard and mouse" description="Compare inside, outside and all-click closing while preserving Escape keyboard support." html-code="$.examples.autoclose.html" ts-code="$.examples.autoclose.typescript">
    <docs-tooltip-autoclose></docs-tooltip-autoclose>
</docs-example-section>

<docs-example-section fragment="tooltip-context" title="Context and manual triggers" description="Pass template context at open time or provide a default tooltip-context." html-code="$.examples.context.html" ts-code="$.examples.context.typescript">
    <docs-tooltip-context></docs-tooltip-context>
</docs-example-section>

<docs-example-section fragment="tooltip-custom-target" title="Custom target" description="Trigger the tooltip from one element while positioning it against another." html-code="$.examples.customTarget.html" ts-code="$.examples.customTarget.typescript">
    <docs-tooltip-custom-target></docs-tooltip-custom-target>
</docs-example-section>

<docs-example-section fragment="tooltip-delays" title="Open and close delays" description="Delay opening and closing while allowing the pointer to move safely into the tooltip." html-code="$.examples.delays.html" ts-code="$.examples.delays.typescript">
    <docs-tooltip-delays></docs-tooltip-delays>
</docs-example-section>

<docs-example-section fragment="tooltip-body" title="Append tooltip in the body" description="Escape a clipping container by appending the tooltip window directly to document.body." html-code="$.examples.body.html" ts-code="$.examples.body.typescript">
    <docs-tooltip-body></docs-tooltip-body>
</docs-example-section>

<docs-example-section fragment="tooltip-custom-class" title="Tooltip with custom class" description="Apply a small custom theme through Bootstrap tooltip variables." html-code="$.examples.customClass.html" ts-code="$.examples.customClass.typescript" css-code="$.examples.customClass.css">
    <docs-tooltip-custom-class></docs-tooltip-custom-class>
</docs-example-section>

<docs-example-section fragment="tooltip-global" title="Global configuration of tooltips" description="Set shared container, placement, trigger and delay defaults through NgbTooltipConfig." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-tooltip-global></docs-tooltip-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/toast-examples-page/toast-examples-page.component.html`,`<docs-example-section fragment="inline-toast" title="Declarative inline usage" description="Render static body-only and text-header toasts directly in the page." html-code="$.examples.inline.html" ts-code="$.examples.inline.typescript">
    <docs-inline-toast></docs-inline-toast>
</docs-example-section>

<docs-example-section fragment="template-header-toast" title="Using a Template as header" description="Project an ng-template to build a richer header with custom markup." html-code="$.examples.templateHeader.html" ts-code="$.examples.templateHeader.typescript">
    <docs-template-header-toast></docs-template-header-toast>
</docs-example-section>

<docs-example-section fragment="closeable-toast" title="Closeable toast" description="Handle hidden to remove the toast and recreate it after a short delay." html-code="$.examples.closeable.html" ts-code="$.examples.closeable.typescript">
    <docs-closeable-toast></docs-closeable-toast>
</docs-example-section>

<docs-example-section fragment="prevent-autohide-toast" title="Prevent autohide on mouseover" description="Pause the autohide timer while the pointer remains over the toast and restart it on mouseleave." html-code="$.examples.preventAutohide.html" ts-code="$.examples.preventAutohide.typescript">
    <docs-prevent-autohide-toast></docs-prevent-autohide-toast>
</docs-example-section>

<docs-example-section fragment="toast-management" title="Toast management service" description="Create, remove and clear multiple notifications through a reusable AngularJS service." html-code="$.examples.management.html" ts-code="$.examples.management.typescript">
    <docs-toast-management></docs-toast-management>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/toast-api-page/toast-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbToast</code></h2><p class="text-body-secondary mb-0">Displays an accessible notification with optional automatic dismissal.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-toast&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables show and hide transitions.</td></tr>
            <tr><td><code>autohide</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Automatically hides the toast.</td></tr>
            <tr><td><code>delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>5000</code></td><td>Autohide delay in milliseconds.</td></tr>
            <tr><td><code>header</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Sets the default header text.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody>
            <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The show transition finishes.</td></tr>
            <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The hide transition finishes.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast-header">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbToastHeader</code></h2><p class="text-body-secondary mb-0">Marks a custom template as the toast header.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-toast-header&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-toast-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbToastConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide toast defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>ariaLive</code></td><td><code>"polite" | "assertive"</code></td><td><code>"polite"</code></td></tr>
        <tr><td><code>autohide</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
        <tr><td><code>delay</code></td><td><code>number</code></td><td><code>5000</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component.html`,`<docs-example-section fragment="basic-timepicker" title="Basic timepicker" description="Bind an NgbTimeStruct model to the default timepicker." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-timepicker></docs-basic-timepicker>
</docs-example-section>

<docs-example-section fragment="meridian-timepicker" title="Meridian" description="Switch between 24-hour and 12-hour input with a localized period selector." html-code="$.examples.meridian.html" ts-code="$.examples.meridian.typescript">
    <docs-meridian-timepicker></docs-meridian-timepicker>
</docs-example-section>

<docs-example-section fragment="seconds-timepicker" title="Seconds" description="Show or hide the seconds field while preserving the same time model." html-code="$.examples.seconds.html" ts-code="$.examples.seconds.typescript">
    <docs-seconds-timepicker></docs-seconds-timepicker>
</docs-example-section>

<docs-example-section fragment="spinners-timepicker" title="Spinners" description="Toggle the increment and decrement controls without disabling keyboard input." html-code="$.examples.spinners.html" ts-code="$.examples.spinners.typescript">
    <docs-spinners-timepicker></docs-spinners-timepicker>
</docs-example-section>

<docs-example-section fragment="timepicker-custom-steps" title="Custom steps" description="Configure independent increments for hours, minutes and seconds." html-code="$.examples.steps.html" ts-code="$.examples.steps.typescript">
    <docs-timepicker-custom-steps></docs-timepicker-custom-steps>
</docs-example-section>

<docs-example-section fragment="timepicker-validation" title="Custom validation" description="Add an AngularJS ngModel validator that only accepts times between 12:00 and 13:59." html-code="$.examples.validation.html" ts-code="$.examples.validation.typescript">
    <docs-timepicker-validation></docs-timepicker-validation>
</docs-example-section>

<docs-example-section fragment="timepicker-custom-adapter" title="Custom time adapter" description="Implement NgbTimeAdapter to convert between NgbTimeStruct and an application-level HH:mm:ss string. Adapter providers are application-wide in AngularJS." html-code="$.examples.adapter.html" ts-code="$.examples.adapter.typescript">
    <docs-timepicker-custom-adapter></docs-timepicker-custom-adapter>
</docs-example-section>

<docs-example-section fragment="timepicker-i18n" title="Internationalization" description="Replace NgbTimepickerI18n application-wide to supply custom Greek morning and afternoon labels." html-code="$.examples.i18n.html" ts-code="$.examples.i18n.typescript">
    <docs-timepicker-i18n></docs-timepicker-i18n>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/tooltip-api-page/tooltip-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-tooltip">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbTooltip</code></h2><p class="text-body-secondary mb-0">Attaches a positioned Bootstrap tooltip to any host element.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-tooltip="'Help text'"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-tooltip</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Tooltip content.</td></tr>
            <tr><td><code>tooltip-context</code></td><td><code>&lt;?</code></td><td><code>object</code></td><td>—</td><td>Context supplied to template content.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables open and close transitions.</td></tr>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls automatic closing.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>PlacementArray</code></td><td><code>"auto"</code></td><td>Preferred Popper placement.</td></tr>
            <tr><td><code>triggers</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"hover focus"</code></td><td>Space-separated open and close triggers.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>$config.container</code></td><td>Container selector for the tooltip window.</td></tr>
            <tr><td><code>position-target</code></td><td><code>@?</code></td><td><code>string</code></td><td>Host element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>tooltip-class</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the tooltip window.</td></tr>
            <tr><td><code>disable-tooltip</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents the tooltip from opening.</td></tr>
            <tr><td><code>open-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before opening in milliseconds.</td></tr>
            <tr><td><code>close-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before closing in milliseconds.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The tooltip opens.</td></tr>
        <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The tooltip closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-tooltip-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTooltipConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide tooltip defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>placement</code></td><td><code>"auto"</code></td></tr>
        <tr><td><code>triggers</code></td><td><code>"hover focus"</code></td></tr>
        <tr><td><code>disableTooltip</code></td><td><code>false</code></td></tr>
        <tr><td><code>openDelay</code>, <code>closeDelay</code></td><td><code>0</code></td></tr>
        <tr><td><code>container</code>, <code>tooltipClass</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/timepicker-api-page/timepicker-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepicker</code></h2><p class="text-body-secondary mb-0">Edits a time value through AngularJS forms with optional spinners, seconds and meridian mode.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-timepicker ng-model="time"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>meridian</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses a 12-hour clock with period selector.</td></tr>
            <tr><td><code>spinners</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows increment and decrement controls.</td></tr>
            <tr><td><code>seconds</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows the seconds field.</td></tr>
            <tr><td><code>hour-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Hours changed per step.</td></tr>
            <tr><td><code>minute-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Minutes changed per step.</td></tr>
            <tr><td><code>second-step</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Seconds changed per step.</td></tr>
            <tr><td><code>readonly-inputs</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Makes text fields readonly while keeping spinner controls active.</td></tr>
            <tr><td><code>size</code></td><td><code>&lt;?</code></td><td><code>"small" | "medium" | "large"</code></td><td><code>"medium"</code></td><td>Sets the control size.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>$config.disabled</code></td><td>Disables the timepicker.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepickerConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide timepicker defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>meridian</code>, <code>seconds</code>, <code>disabled</code>, <code>readonlyInputs</code></td><td><code>false</code></td></tr>
        <tr><td><code>spinners</code></td><td><code>true</code></td></tr>
        <tr><td><code>hourStep</code>, <code>minuteStep</code>, <code>secondStep</code></td><td><code>1</code></td></tr>
        <tr><td><code>size</code></td><td><code>"medium"</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-time-adapter">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimeAdapter&lt;T&gt;</code></h2><p class="text-body-secondary mb-0">Converts between the application model and <code>NgbTimeStruct</code>.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>fromModel(value)</code></td><td><code>NgbTimeStruct | null</code></td><td>Converts an application value for the timepicker.</td></tr>
        <tr><td><code>toModel(time)</code></td><td><code>T | null</code></td><td>Converts the timepicker value back to the application model.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-timepicker-i18n">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbTimepickerI18n</code></h2><p class="text-body-secondary mb-0">Supplies localized morning and afternoon period labels.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Returns</th></tr></thead><tbody>
        <tr><td><code>getMorningPeriod()</code></td><td><code>string</code></td></tr>
        <tr><td><code>getAfternoonPeriod()</code></td><td><code>string</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component.html`,`<docs-example-section fragment="basic-scrollspy" title="Basic" description="Observe fragments inside an independent scroll container and read the currently active id." html-code="$.examples.basic.html">
    <docs-basic-scrollspy></docs-basic-scrollspy>
</docs-example-section>

<docs-example-section fragment="scrollspy-menu-items" title="Menu items" description="Connect Bootstrap list-group items to a scrollspy instance outside the observed container." html-code="$.examples.menuItems.html">
    <docs-scrollspy-menu-items></docs-scrollspy-menu-items>
</docs-example-section>

<docs-example-section fragment="nested-scrollspy" title="Nested items" description="Group child fragments under parent menu items and keep both levels synchronized." html-code="$.examples.nested.html">
    <docs-nested-scrollspy></docs-nested-scrollspy>
</docs-example-section>

<docs-example-section fragment="navbar-scrollspy" title="Navbar" description="Use a Bootstrap navbar as an external menu for a separate scroll container." html-code="$.examples.navbar.html">
    <docs-navbar-scrollspy></docs-navbar-scrollspy>
</docs-example-section>

<docs-example-section fragment="scrollspy-service" title="Using the service" description="Start, stop and control observation programmatically with NgbScrollSpyService and ordinary DOM fragments." html-code="$.examples.service.html" ts-code="$.examples.service.typescript">
    <docs-scrollspy-service-demo></docs-scrollspy-service-demo>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/scrollspy-api-page/scrollspy-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpy</code></h2><p class="text-body-secondary mb-0">Turns a scrollable element into an observed container and tracks its active fragment.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;main ngb-scroll-spy&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>active</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>""</code></td><td>Initial or requested active fragment id.</td></tr>
            <tr><td><code>process-changes</code></td><td><code>&lt;?</code></td><td><code>NgbScrollSpyProcessChanges</code></td><td><code>$config.processChanges</code></td><td>Determines the active fragment from observer changes.</td></tr>
            <tr><td><code>root-margin</code></td><td><code>@?</code></td><td><code>string</code></td><td>Browser default</td><td>IntersectionObserver root margin.</td></tr>
            <tr><td><code>scroll-behavior</code></td><td><code>@?</code></td><td><code>"auto" | "smooth"</code></td><td><code>"smooth"</code></td><td>Default behavior for programmatic scrolling.</td></tr>
            <tr><td><code>threshold</code></td><td><code>&lt;?</code></td><td><code>number | number[]</code></td><td>Browser default</td><td>IntersectionObserver thresholds.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>active-change</code></td><td><code>&amp;?</code></td><td><code>$event: string</code></td><td>The active fragment changes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-fragment">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyFragment</code></h2><p class="text-body-secondary mb-0">Registers a section with its ancestor scrollspy and assigns its DOM id.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;section ngb-scroll-spy-fragment="overview"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-scroll-spy</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-fragment</code></td><td><code>@</code></td><td><code>string</code></td><td>Required</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-menu">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyMenu</code></h2><p class="text-body-secondary mb-0">Coordinates nested menu items and applies their active state.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;nav ngb-scroll-spy-menu&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-menu</code></td><td><code>&lt;?</code></td><td>Optional explicit <code>NgbScrollSpy</code>; otherwise uses an ancestor or injected service.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyItem</code></h2><p class="text-body-secondary mb-0">Links a menu entry to a fragment, applies <code>active</code> and scrolls on click.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;a ngb-scroll-spy-item="overview"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-scroll-spy-item</code></td><td><code>@?</code></td><td>Fragment id or shorthand item data.</td></tr>
        <tr><td><code>fragment</code></td><td><code>@?</code></td><td>Explicit fragment id.</td></tr>
        <tr><td><code>parent</code></td><td><code>@?</code></td><td>Parent fragment id for nested menus.</td></tr>
        <tr><td><code>scroll-spy</code></td><td><code>&lt;?</code></td><td>Explicit <code>NgbScrollSpy</code> controller.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-service">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyService</code></h2><p class="text-body-secondary mb-0">Provides programmatic scrollspy control without a directive host.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>active</code></td><td>Current fragment id.</td></tr>
        <tr><td><code>active$</code></td><td>Observable of distinct active fragment changes.</td></tr>
        <tr><td><code>start(options?)</code></td><td>Starts observation with optional root, fragments and IntersectionObserver settings.</td></tr>
        <tr><td><code>stop()</code></td><td>Stops observation and clears the active fragment.</td></tr>
        <tr><td><code>observe(fragment)</code></td><td>Adds a fragment to observation.</td></tr>
        <tr><td><code>unobserve(fragment)</code></td><td>Removes a fragment from observation.</td></tr>
        <tr><td><code>scrollTo(fragment, options?)</code></td><td>Scrolls to a registered id or element.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-scrollspy-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbScrollSpyConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide scrollspy defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>scrollBehavior</code></td><td><code>"smooth"</code></td></tr>
        <tr><td><code>processChanges</code></td><td>Built-in intersection processing function</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/rating-api-page/rating-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-rating">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbRating</code></h2><p class="text-body-secondary mb-0">Provides an accessible keyboard-driven rating control with customizable stars.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-rating rate="rating"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>rate</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Current rating value.</td></tr>
            <tr><td><code>max</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>10</code></td><td>Maximum number of rating items.</td></tr>
            <tr><td><code>readonly</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents user changes.</td></tr>
            <tr><td><code>resettable</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Allows selecting the current value again to reset to zero.</td></tr>
            <tr><td><code>star-template</code></td><td><code>&lt;?</code></td><td><code>TemplateRef</code></td><td>Default star</td><td>Provides custom item markup.</td></tr>
            <tr><td><code>tabindex</code></td><td><code>&lt;?</code></td><td><code>number | string</code></td><td><code>0</code></td><td>Sets keyboard tab order.</td></tr>
            <tr><td><code>aria-value-text</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td>Built-in formatter</td><td>Formats the accessible value text.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables interaction and focus.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody>
            <tr><td><code>rate-change</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The interactive rating changes.</td></tr>
            <tr><td><code>hover</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>A rating item is hovered.</td></tr>
            <tr><td><code>leave</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The pointer leaves the rating.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-rating-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbRatingConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide rating defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>max</code></td><td><code>number</code></td><td><code>10</code></td></tr>
        <tr><td><code>readonly</code>, <code>resettable</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
        <tr><td><code>tabindex</code></td><td><code>number | string</code></td><td><code>0</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/rating-examples-page/rating-examples-page.component.html`,`<docs-example-section fragment="basic-rating" title="Basic demo" description="Select a rating and synchronize its value through rate-change." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-rating></docs-basic-rating>
</docs-example-section>

<docs-example-section fragment="rating-events" title="Events and readonly ratings" description="Observe hover and leave events and switch the same rating between editable and read-only states." html-code="$.examples.events.html" ts-code="$.examples.events.typescript">
    <docs-rating-events></docs-rating-events>
</docs-example-section>

<docs-example-section fragment="rating-custom-template" title="Custom star template" description="Replace the default characters with a child ng-template using Bootstrap Icons." html-code="$.examples.customTemplate.html" ts-code="$.examples.customTemplate.typescript" css-code="$.examples.customTemplate.css">
    <docs-rating-custom-template></docs-rating-custom-template>
</docs-example-section>

<docs-example-section fragment="rating-decimal" title="Custom decimal rating" description="Render fractional heart fills through star-template and provide accessible value text." html-code="$.examples.decimal.html" ts-code="$.examples.decimal.typescript" css-code="$.examples.decimal.css">
    <docs-rating-decimal></docs-rating-decimal>
</docs-example-section>

<docs-example-section fragment="rating-form" title="Form integration" description="Synchronize rate and rate-change with an AngularJS form model while direct ng-model support remains pending." html-code="$.examples.form.html" ts-code="$.examples.form.typescript">
    <docs-rating-form></docs-rating-form>
</docs-example-section>

<docs-example-section fragment="rating-global" title="Customized default values" description="Change NgbRatingConfig once to provide shared maximum, read-only and tabindex defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-rating-global></docs-rating-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component.html`,`<docs-example-section fragment="simple-progressbar" title="Simple progress bars" description="Display simple values using Bootstrap contextual types." html-code="$.examples.simple.html" ts-code="$.examples.simple.typescript">
    <docs-simple-progressbar></docs-simple-progressbar>
</docs-example-section>

<docs-example-section fragment="contextual-text-progressbar" title="Contextual text progress bars" description="Show the calculated percentage and choose a contextual foreground color." html-code="$.examples.contextual.html" ts-code="$.examples.contextual.typescript">
    <docs-contextual-text-progressbar></docs-contextual-text-progressbar>
</docs-example-section>

<docs-example-section fragment="striped-progress-bar" title="Striped progress bars" description="Apply striped styling to contextual variants and optionally animate the stripes." html-code="$.examples.striped.html" ts-code="$.examples.striped.typescript">
    <docs-striped-progress-bar></docs-striped-progress-bar>
</docs-example-section>

<docs-example-section fragment="custom-labels-progressbar" title="Custom labels" description="Project arbitrary HTML labels inside each progress bar." html-code="$.examples.labels.html" ts-code="$.examples.labels.typescript">
    <docs-custom-labels-progressbar></docs-custom-labels-progressbar>
</docs-example-section>

<docs-example-section fragment="progress-height" title="Progress height" description="Set the progress container height through the height input." html-code="$.examples.height.html" ts-code="$.examples.height.typescript">
    <docs-progress-height></docs-progress-height>
</docs-example-section>

<docs-example-section fragment="progress-bars-stacked" title="Stacked progress bars" description="Combine multiple contextual segments inside NgbProgressbarStacked." html-code="$.examples.stacked.html" ts-code="$.examples.stacked.typescript">
    <docs-progress-bars-stacked></docs-progress-bars-stacked>
</docs-example-section>

<docs-example-section fragment="progressbar-global" title="Global configuration" description="Change NgbProgressbarConfig once to provide shared visual and value defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-progressbar-global></docs-progressbar-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/popover-examples-page/popover-examples-page.component.html`,`<docs-example-section fragment="popover-placements" title="Quick and easy popovers" description="Place a popover above, to the right, below or to the left of its trigger." html-code="$.examples.placements.html" ts-code="$.examples.placements.typescript">
    <docs-popover-placements></docs-popover-placements>
</docs-example-section>

<docs-example-section fragment="popover-template" title="HTML and bindings in popovers" description="Use ng-template for rich title and body content with live AngularJS bindings." html-code="$.examples.template.html" ts-code="$.examples.template.typescript">
    <docs-popover-template></docs-popover-template>
</docs-example-section>

<docs-example-section fragment="popover-triggers" title="Custom and manual triggers" description="Pair custom DOM events or take manual control with two buttons." html-code="$.examples.triggers.html" ts-code="$.examples.triggers.typescript">
    <docs-popover-triggers></docs-popover-triggers>
</docs-example-section>

<docs-example-section fragment="popover-manual-control" title="External manual controls" description="Open, close and toggle a target popover from independent controls." html-code="$.examples.manual.html" ts-code="$.examples.manual.typescript">
    <docs-popover-manual-control></docs-popover-manual-control>
</docs-example-section>

<docs-example-section fragment="popover-autoclose" title="Automatic closing with keyboard and mouse" description="Close on inside clicks, outside clicks, every click or the Escape key." html-code="$.examples.autoclose.html" ts-code="$.examples.autoclose.typescript">
    <docs-popover-autoclose></docs-popover-autoclose>
</docs-example-section>

<docs-example-section fragment="popover-context" title="Context and manual triggers" description="Supply template context while opening manually or through popover-context." html-code="$.examples.context.html" ts-code="$.examples.context.typescript">
    <docs-popover-context></docs-popover-context>
</docs-example-section>

<docs-example-section fragment="popover-custom-target" title="Custom target" description="Trigger a popover from one element while positioning it against another." html-code="$.examples.customTarget.html" ts-code="$.examples.customTarget.typescript">
    <docs-popover-custom-target></docs-popover-custom-target>
</docs-example-section>

<docs-example-section fragment="popover-delays" title="Open and close delays" description="Delay hover opening and keep content available while the pointer moves into it." html-code="$.examples.delays.html" ts-code="$.examples.delays.typescript">
    <docs-popover-delays></docs-popover-delays>
</docs-example-section>

<docs-example-section fragment="popover-events" title="Popover visibility events" description="Observe shown and hidden callbacks and record when each transition completes." html-code="$.examples.events.html" ts-code="$.examples.events.typescript">
    <docs-popover-events></docs-popover-events>
</docs-example-section>

<docs-example-section fragment="popover-body" title="Append popover in the body" description="Escape clipping containers by appending the popover window to document.body." html-code="$.examples.body.html" ts-code="$.examples.body.typescript">
    <docs-popover-body></docs-popover-body>
</docs-example-section>

<docs-example-section fragment="popover-custom-class" title="Popover with custom class" description="Layer a focused visual treatment over Bootstrap popover variables." html-code="$.examples.customClass.html" ts-code="$.examples.customClass.typescript" css-code="$.examples.customClass.css">
    <docs-popover-custom-class></docs-popover-custom-class>
</docs-example-section>

<docs-example-section fragment="popover-global" title="Global configuration of popovers" description="Change NgbPopoverConfig once to provide shared trigger, placement, delay and container defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-popover-global></docs-popover-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/popover-api-page/popover-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-popover">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbPopover</code></h2><p class="text-body-secondary mb-0">Attaches a positioned Bootstrap popover to any host element.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-popover="'Content'"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>ngb-popover</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Popover body content.</td></tr>
            <tr><td><code>popover-title</code></td><td><code>&lt;?</code></td><td><code>string | TemplateRef</code></td><td>—</td><td>Optional title content.</td></tr>
            <tr><td><code>popover-context</code></td><td><code>&lt;?</code></td><td><code>object</code></td><td>—</td><td>Context supplied to template content.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables open and close transitions.</td></tr>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls automatic closing.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>PlacementArray</code></td><td><code>"auto"</code></td><td>Preferred Popper placement.</td></tr>
            <tr><td><code>triggers</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>"click"</code></td><td>Space-separated open and close triggers.</td></tr>
            <tr><td><code>container</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td><code>$config.container</code></td><td>Container selector for the popover window.</td></tr>
            <tr><td><code>position-target</code></td><td><code>&lt;?</code></td><td><code>HTMLElement | string</code></td><td>Host element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>popover-class</code></td><td><code>@?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the popover window.</td></tr>
            <tr><td><code>disable-popover</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents the popover from opening.</td></tr>
            <tr><td><code>open-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before opening in milliseconds.</td></tr>
            <tr><td><code>close-delay</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay before closing in milliseconds.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The popover opens.</td></tr>
        <tr><td><code>hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The popover closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-popover-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbPopoverConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide popover defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>placement</code></td><td><code>"auto"</code></td></tr>
        <tr><td><code>triggers</code></td><td><code>"click"</code></td></tr>
        <tr><td><code>disablePopover</code></td><td><code>false</code></td></tr>
        <tr><td><code>openDelay</code>, <code>closeDelay</code></td><td><code>0</code></td></tr>
        <tr><td><code>container</code>, <code>popoverClass</code></td><td><code>undefined</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/pagination-examples-page/pagination-examples-page.component.html`,`<docs-example-section fragment="basic-pagination" title="Basic pagination" description="Navigate a collection with the default pagination options." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript">
    <docs-basic-pagination></docs-basic-pagination>
</docs-example-section>

<docs-example-section fragment="advanced-pagination" title="Advanced pagination" description="Limit visible pages, rotate the range and control boundary links and ellipses." html-code="$.examples.advanced.html" ts-code="$.examples.advanced.typescript">
    <docs-advanced-pagination></docs-advanced-pagination>
</docs-example-section>

<docs-example-section fragment="custom-pagination" title="Custom links and pages" description="Replace the previous, next and page-number content with ng-template." html-code="$.examples.custom.html" ts-code="$.examples.custom.typescript">
    <docs-custom-pagination></docs-custom-pagination>
</docs-example-section>

<docs-example-section fragment="pagination-size" title="Pagination size" description="Use Bootstrap small, default and large pagination sizes." html-code="$.examples.size.html" ts-code="$.examples.size.typescript">
    <docs-pagination-size></docs-pagination-size>
</docs-example-section>

<docs-example-section fragment="pagination-alignment" title="Pagination alignment" description="Align pagination at the start, center or end using Bootstrap flex utilities." html-code="$.examples.alignment.html" ts-code="$.examples.alignment.typescript">
    <docs-pagination-alignment></docs-pagination-alignment>
</docs-example-section>

<docs-example-section fragment="disabled-pagination" title="Disabled pagination" description="Disable every pagination action through the ng-disabled directive." html-code="$.examples.disabled.html" ts-code="$.examples.disabled.typescript">
    <docs-disabled-pagination></docs-disabled-pagination>
</docs-example-section>

<docs-example-section fragment="pagination-global" title="Global configuration" description="Change NgbPaginationConfig once to provide shared pagination defaults." html-code="$.examples.global.html" ts-code="$.examples.global.typescript">
    <docs-pagination-global></docs-pagination-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/pagination-api-page/pagination-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-pagination">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbPagination</code></h2><p class="text-body-secondary mb-0">Builds accessible page navigation for a collection.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-pagination collection-size="total" page="page"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>collection-size</code></td><td><code>&lt;</code></td><td><code>number</code></td><td>Required</td><td>Total number of collection items.</td></tr>
            <tr><td><code>page</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>1</code></td><td>Current page.</td></tr>
            <tr><td><code>page-size</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>10</code></td><td>Items represented by each page.</td></tr>
            <tr><td><code>max-size</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>0</code></td><td>Maximum number of visible page links; zero is unlimited.</td></tr>
            <tr><td><code>boundary-links</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows first and last links.</td></tr>
            <tr><td><code>direction-links</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows previous and next links.</td></tr>
            <tr><td><code>ellipses</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows ellipses for omitted ranges.</td></tr>
            <tr><td><code>rotate</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Centers the current page within the visible range.</td></tr>
            <tr><td><code>size</code></td><td><code>&lt;?</code></td><td><code>string | null</code></td><td><code>$config.size</code></td><td>Sets the Bootstrap pagination size.</td></tr>
            <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables page navigation.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>page-change</code></td><td><code>&amp;?</code></td><td><code>$event: number</code></td><td>The user selects a page.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-pagination-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbPaginationConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide pagination defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>disabled</code>, <code>boundaryLinks</code>, <code>rotate</code></td><td><code>false</code></td></tr>
        <tr><td><code>directionLinks</code>, <code>ellipses</code></td><td><code>true</code></td></tr>
        <tr><td><code>maxSize</code></td><td><code>0</code></td></tr>
        <tr><td><code>pageSize</code></td><td><code>10</code></td></tr>
        <tr><td><code>size</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/progressbar-api-page/progressbar-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbar</code></h2><p class="text-body-secondary mb-0">Renders an accessible Bootstrap progress indicator for a numeric value.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-progressbar value="progress"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>value</code></td><td><code>&lt;</code></td><td><code>number</code></td><td>Required</td><td>Current progress value.</td></tr>
            <tr><td><code>max</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value.</td></tr>
            <tr><td><code>animated</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Animates striped progress.</td></tr>
            <tr><td><code>striped</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses a striped background.</td></tr>
            <tr><td><code>show-value</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Displays the calculated percentage.</td></tr>
            <tr><td><code>type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.type</code></td><td>Sets the bar contextual type.</td></tr>
            <tr><td><code>text-type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.textType</code></td><td>Sets the label text color.</td></tr>
            <tr><td><code>height</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>$config.height</code></td><td>Sets the progress container height.</td></tr>
            <tr><td><code>aria-label</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>"progress bar"</code></td><td>Accessible label for the bar.</td></tr>
        </tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar-stacked">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbarStacked</code></h2><p class="text-body-secondary mb-0">Groups multiple progress bars into a Bootstrap stacked progress container.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-progressbar-stacked&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-progressbar-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbProgressbarConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide progress bar defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>"progress bar"</code></td></tr>
        <tr><td><code>animated</code>, <code>showValue</code>, <code>striped</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
        <tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td></tr>
        <tr><td><code>height</code>, <code>textType</code>, <code>type</code></td><td><code>string | undefined</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/offcanvas-api-page/offcanvas-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvas</code></h2><p class="text-body-secondary mb-0">Creates and coordinates offcanvas panels from templates or components.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>open(content, options?)</code></td><td><code>NgbOffcanvasRef</code></td><td>Opens content with options merged over <code>NgbOffcanvasConfig</code>.</td></tr>
        <tr><td><code>activeInstance</code></td><td>Active instance</td><td>Exposes the currently open offcanvas instance.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td><code>void</code></td><td>Dismisses the active panel.</td></tr>
        <tr><td><code>hasOpenOffcanvas()</code></td><td><code>boolean</code></td><td>Reports whether a panel is open.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas-ref">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Class</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvasRef</code></h2><p class="text-body-secondary mb-0">Controls one panel and exposes its result and lifecycle streams.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Resolves <code>result</code> and closes the panel.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Rejects <code>result</code> and dismisses the panel.</td></tr>
        <tr><td><code>result</code></td><td>AngularJS promise settled by close or dismiss.</td></tr>
        <tr><td><code>closed</code>, <code>dismissed</code>, <code>shown</code>, <code>hidden</code></td><td>Observable lifecycle streams.</td></tr>
        <tr><td><code>componentInstance</code></td><td>Component controller instance when component content is used.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-active-offcanvas">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbActiveOffcanvas</code></h2><p class="text-body-secondary mb-0">Allows offcanvas content to control the panel that contains it.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Closes with an optional result.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Dismisses with an optional reason.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-offcanvas-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbOffcanvasConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults merged into every <code>open()</code> call.</p></header>
    <h3 class="h5 mt-4 mb-3">Options</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td><td>Enables panel and backdrop transitions.</td></tr>
        <tr><td><code>backdrop</code></td><td><code>true</code></td><td>Accepts <code>true</code>, <code>false</code> or <code>"static"</code>.</td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td><td>Allows Escape-key dismissal.</td></tr>
        <tr><td><code>position</code></td><td><code>"start"</code></td><td>Accepts <code>"start"</code>, <code>"end"</code>, <code>"top"</code> or <code>"bottom"</code>.</td></tr>
        <tr><td><code>scroll</code></td><td><code>false</code></td><td>Allows body scrolling while open.</td></tr>
        <tr><td><code>ariaLabelledBy</code>, <code>ariaDescribedBy</code></td><td><code>undefined</code></td><td>Connect accessible label and description elements.</td></tr>
        <tr><td><code>container</code>, <code>bindings</code></td><td><code>undefined</code></td><td>Control content creation and placement.</td></tr>
        <tr><td><code>panelClass</code>, <code>backdropClass</code></td><td><code>undefined</code></td><td>Add custom classes.</td></tr>
        <tr><td><code>beforeDismiss</code></td><td><code>undefined</code></td><td>Can cancel dismissal synchronously or asynchronously.</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component.html`,`<docs-example-section
    fragment="offcanvas-default"
    title="Offcanvas with default options"
    description="Open a TemplateRef panel without passing local options."
    html-code="$.examples.defaults.html"
    ts-code="$.examples.defaults.typescript">
    <docs-offcanvas-default></docs-offcanvas-default>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-component-content"
    title="Components as content"
    description="Open a registered component and close or dismiss it through NgbActiveOffcanvas."
    html-code="$.examples.componentContent.html"
    ts-code="$.examples.componentContent.typescript">
    <docs-offcanvas-component-content></docs-offcanvas-component-content>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-focus"
    title="Focus management"
    description="Focus the first interactive element automatically or choose another element with ngbAutofocus."
    html-code="$.examples.focus.html"
    ts-code="$.examples.focus.typescript">
    <docs-offcanvas-focus></docs-offcanvas-focus>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-options"
    title="Offcanvas with options"
    description="Try custom classes, a static backdrop, every panel position and body scrolling."
    html-code="$.examples.options.html"
    ts-code="$.examples.options.typescript"
    css-code="$.examples.options.css">
    <docs-offcanvas-options></docs-offcanvas-options>
</docs-example-section>

<docs-example-section
    fragment="offcanvas-global"
    title="Global configuration"
    description="Change NgbOffcanvasConfig once to provide shared defaults when opening a panel."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-offcanvas-global></docs-offcanvas-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/nav-examples-page/nav-examples-page.component.html`,`<docs-example-section
    fragment="simple-nav"
    title="Simple nav"
    description="A basic tabbed nav with three items and an associated content outlet."
    html-code="$.examples.simple.html"
    ts-code="$.examples.simple.typescript">
    <docs-simple-nav></docs-simple-nav>
</docs-example-section>

<docs-example-section
    fragment="alternative-nav"
    title="Alternative markup"
    description="Use div elements instead of lists and interchange buttons and anchors as nav links."
    html-code="$.examples.alternative.html"
    ts-code="$.examples.alternative.typescript">
    <docs-alternative-nav></docs-alternative-nav>
</docs-example-section>

<docs-example-section
    fragment="vertical-nav"
    title="Vertical pills"
    description="Combine vertical orientation with Bootstrap nav pills and a side-by-side outlet."
    html-code="$.examples.vertical.html"
    ts-code="$.examples.vertical.typescript">
    <docs-vertical-nav></docs-vertical-nav>
</docs-example-section>

<docs-example-section
    fragment="selecting-nav"
    title="Selecting navs"
    description="Select any nav item programmatically through the NgbNav controller."
    html-code="$.examples.selecting.html"
    ts-code="$.examples.selecting.typescript">
    <docs-selecting-nav></docs-selecting-nav>
</docs-example-section>

<docs-example-section
    fragment="keep-content-nav"
    title="Keep content"
    description="Disable content destruction so form state remains in the DOM while another tab is active."
    html-code="$.examples.keepContent.html"
    ts-code="$.examples.keepContent.typescript">
    <docs-keep-content-nav></docs-keep-content-nav>
</docs-example-section>

<docs-example-section
    fragment="dynamic-nav"
    title="Dynamic navs"
    description="Add new tabs at runtime and safely remove the currently active item."
    html-code="$.examples.dynamic.html"
    ts-code="$.examples.dynamic.typescript">
    <docs-dynamic-nav></docs-dynamic-nav>
</docs-example-section>

<docs-example-section
    fragment="custom-nav"
    title="Custom style"
    description="Build a distinct nav appearance with a small custom class layered over NgbJS behavior."
    html-code="$.examples.custom.html"
    ts-code="$.examples.custom.typescript"
    css-code="$.examples.custom.css">
    <docs-custom-nav></docs-custom-nav>
</docs-example-section>

<docs-example-section
    fragment="nav-global"
    title="Global configuration"
    description="Change NgbNavConfig once to provide orientation, keyboard and content defaults."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-nav-global></docs-nav-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/modal-examples-page/modal-examples-page.component.html`,`<docs-example-section
    fragment="modal-default"
    title="Modal with default options"
    description="Open a TemplateRef modal without passing local options."
    html-code="$.examples.defaults.html"
    ts-code="$.examples.defaults.typescript">
    <docs-modal-default></docs-modal-default>
</docs-example-section>

<docs-example-section
    fragment="modal-component-content"
    title="Components as content"
    description="Open a registered component, pass bindings to it and close or dismiss through NgbActiveModal."
    html-code="$.examples.componentContent.html"
    ts-code="$.examples.componentContent.typescript">
    <docs-modal-component-content></docs-modal-component-content>
</docs-example-section>

<docs-example-section
    fragment="modal-focus"
    title="Focus management"
    description="Focus the first interactive element automatically or choose another element with ngbAutofocus."
    html-code="$.examples.focus.html"
    ts-code="$.examples.focus.typescript">
    <docs-modal-focus></docs-modal-focus>
</docs-example-section>

<docs-example-section
    fragment="modal-options"
    title="Modal with options"
    description="Open modal variants for custom classes, backdrops, sizes, fullscreen, centering and scrollable content."
    html-code="$.examples.options.html"
    ts-code="$.examples.options.typescript"
    css-code="$.examples.options.css">
    <docs-modal-options></docs-modal-options>
</docs-example-section>

<docs-example-section
    fragment="modal-updatable"
    title="Updatable options"
    description="Change ARIA references, layout, size and custom classes after the modal has opened."
    html-code="$.examples.updatable.html"
    ts-code="$.examples.updatable.typescript"
    css-code="$.examples.updatable.css">
    <docs-modal-updatable></docs-modal-updatable>
</docs-example-section>

<docs-example-section
    fragment="modal-stacked"
    title="Stacked modals"
    description="Open multiple modal layers and dismiss the complete stack from the modal service."
    html-code="$.examples.stacked.html"
    ts-code="$.examples.stacked.typescript">
    <docs-modal-stacked></docs-modal-stacked>
</docs-example-section>

<docs-example-section
    fragment="modal-global"
    title="Global configuration"
    description="Change NgbModalConfig once to provide defaults for every modal opened in this example."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-modal-global></docs-modal-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/nav-api-page/nav-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNav</code></h2><p class="text-body-secondary mb-0">Coordinates nav items, selection, keyboard behavior and panel transitions.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ul ngb-nav active-id="activeId"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>active-id</code></td><td><code>=?</code></td><td><code>string</code></td><td>First enabled item</td><td>Two-way active item id.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables panel transitions.</td></tr>
            <tr><td><code>destroy-on-hide</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Removes inactive panel views.</td></tr>
            <tr><td><code>keyboard</code></td><td><code>&lt;?</code></td><td><code>boolean | "changeWithArrows"</code></td><td><code>true</code></td><td>Controls arrow-key navigation.</td></tr>
            <tr><td><code>orientation</code></td><td><code>&lt;?</code></td><td><code>"horizontal" | "vertical"</code></td><td><code>"horizontal"</code></td><td>Sets keyboard orientation.</td></tr>
            <tr><td><code>roles</code></td><td><code>&lt;?</code></td><td><code>"tablist" | false</code></td><td><code>"tablist"</code></td><td>Enables or disables tab ARIA roles.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>active-id-change</code></td><td><code>$event: string</code></td><td>The active id changes.</td></tr>
        <tr><td><code>nav-change</code></td><td><code>$event: NgbNavChangeEvent</code></td><td>Before selection changes; the event can prevent it.</td></tr>
        <tr><td><code>shown</code></td><td><code>$event: string</code></td><td>The next panel finishes appearing.</td></tr>
        <tr><td><code>hidden</code></td><td><code>$event: string</code></td><td>The previous panel finishes hiding.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavItem</code></h2><p class="text-body-secondary mb-0">Defines one selectable item and its associated content.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;li ngb-nav-item="overview"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-nav</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Bindings</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Name</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-nav-item</code></td><td><code>@?</code></td><td>Generated id</td><td>Identifies the item.</td></tr>
        <tr><td><code>dom-id</code></td><td><code>@?</code></td><td>Generated id</td><td>Overrides the DOM id.</td></tr>
        <tr><td><code>destroy-on-hide</code></td><td><code>&lt;?</code></td><td>Inherited</td><td>Overrides panel lifecycle for this item.</td></tr>
        <tr><td><code>shown</code>, <code>hidden</code></td><td><code>&amp;?</code></td><td>—</td><td>Item-level panel lifecycle callbacks.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-link">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavLink</code></h2><p class="text-body-secondary mb-0">Turns an anchor or button into the interactive trigger for its nav item.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-nav-link&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">Ancestor <code>ngb-nav-item</code> and <code>ngb-nav</code> controllers.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-content">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavContent</code></h2><p class="text-body-secondary mb-0">Marks the template rendered for a nav item.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-nav-content&gt;</code></dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-outlet">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbNavOutlet</code></h2><p class="text-body-secondary mb-0">Renders the active panel for a nav controller.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-nav-outlet="navController"&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>ngb-nav-outlet</code></td><td><code>&lt;</code></td><td>The <code>NgbNav</code> controller to render.</td></tr>
        <tr><td><code>pane-role</code></td><td><code>&lt;?</code></td><td>Overrides the generated panel role.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-nav-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbNavConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide nav defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td></tr>
        <tr><td><code>destroyOnHide</code></td><td><code>true</code></td></tr>
        <tr><td><code>orientation</code></td><td><code>"horizontal"</code></td></tr>
        <tr><td><code>roles</code></td><td><code>"tablist"</code></td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component.html`,`<docs-example-section
    fragment="simple-dropdown"
    title="Simple dropdown"
    description="Two basic menus that prefer bottom and top placement respectively."
    html-code="$.examples.simple.html">
    <docs-simple-dropdown></docs-simple-dropdown>
</docs-example-section>

<docs-example-section
    fragment="manual-dropdown"
    title="Manual triggers"
    description="Use the dropdown controller to open, close or toggle a menu without a toggle trigger."
    html-code="$.examples.manual.html"
    ts-code="$.examples.manual.typescript">
    <docs-manual-dropdown></docs-manual-dropdown>
</docs-example-section>

<docs-example-section
    fragment="dropdown-button-groups"
    title="Button groups and split buttons"
    description="Place dropdown toggles inside Bootstrap button groups, including a split action."
    html-code="$.examples.buttonGroups.html">
    <docs-dropdown-button-groups></docs-dropdown-button-groups>
</docs-example-section>

<docs-example-section
    fragment="dropdown-disabled-items"
    title="Disabled items"
    description="Use ng-disabled to update disabled dropdown items dynamically."
    html-code="$.examples.disabledItems.html"
    ts-code="$.examples.disabledItems.typescript">
    <docs-dropdown-disabled-items></docs-dropdown-disabled-items>
</docs-example-section>

<docs-example-section
    fragment="dropdown-form"
    title="Dropdown form"
    description="Place an AngularJS form inside the menu and keep it open while interacting with its fields."
    html-code="$.examples.form.html"
    ts-code="$.examples.form.typescript">
    <docs-dropdown-form></docs-dropdown-form>
</docs-example-section>

<docs-example-section
    fragment="dropdown-body"
    title="Body container"
    description="Append the menu to the document body when an ancestor clips overflowing content."
    html-code="$.examples.body.html">
    <docs-dropdown-body></docs-dropdown-body>
</docs-example-section>

<docs-example-section
    fragment="dropdown-navbar"
    title="Dynamic positioning in a navbar"
    description="Override the navbar's static default with dynamic Popper positioning."
    html-code="$.examples.navbar.html">
    <docs-dropdown-navbar></docs-dropdown-navbar>
</docs-example-section>

<docs-example-section
    fragment="dropdown-global"
    title="Global configuration"
    description="Change NgbDropdownConfig once to provide shared defaults without local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-dropdown-global></docs-dropdown-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/modal-api-page/modal-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbModal</code></h2><p class="text-body-secondary mb-0">Creates and coordinates modal instances from templates or components.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Returns</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>open(content, options?)</code></td><td><code>NgbModalRef</code></td><td>Opens content with options merged over <code>NgbModalConfig</code>.</td></tr>
        <tr><td><code>activeInstances</code></td><td>Active modal collection</td><td>Exposes the currently open modal instances.</td></tr>
        <tr><td><code>dismissAll(reason?)</code></td><td><code>void</code></td><td>Dismisses every open modal.</td></tr>
        <tr><td><code>hasOpenModals()</code></td><td><code>boolean</code></td><td>Reports whether a modal is open.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal-ref">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Class</p><h2 class="h3 mb-2"><code class="text-body">NgbModalRef</code></h2><p class="text-body-secondary mb-0">Controls one modal and exposes its result and lifecycle streams.</p></header>
    <h3 class="h5 mt-4 mb-3">Members</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Resolves <code>result</code> and closes the modal.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Rejects <code>result</code> and dismisses the modal.</td></tr>
        <tr><td><code>update(options)</code></td><td>Updates supported window and backdrop options.</td></tr>
        <tr><td><code>result</code></td><td>AngularJS promise settled by close or dismiss.</td></tr>
        <tr><td><code>closed</code>, <code>dismissed</code>, <code>shown</code>, <code>hidden</code></td><td>Observable lifecycle streams.</td></tr>
        <tr><td><code>componentInstance</code></td><td>Component controller instance when component content is used.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-active-modal">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbActiveModal</code></h2><p class="text-body-secondary mb-0">Allows modal content to control the modal that contains it.</p></header>
    <h3 class="h5 mt-4 mb-3">Methods</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>close(result?)</code></td><td>Closes with an optional result.</td></tr>
        <tr><td><code>dismiss(reason?)</code></td><td>Dismisses with an optional reason.</td></tr>
        <tr><td><code>update(options)</code></td><td>Updates supported modal options.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-modal-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbModalConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults merged into every <code>open()</code> call.</p></header>
    <h3 class="h5 mt-4 mb-3">Options</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>animation</code></td><td><code>$config.animation</code></td><td>Enables modal and backdrop transitions.</td></tr>
        <tr><td><code>backdrop</code></td><td><code>true</code></td><td>Accepts <code>true</code>, <code>false</code> or <code>"static"</code>.</td></tr>
        <tr><td><code>keyboard</code></td><td><code>true</code></td><td>Allows Escape-key dismissal.</td></tr>
        <tr><td><code>centered</code>, <code>scrollable</code></td><td><code>undefined</code></td><td>Controls dialog layout.</td></tr>
        <tr><td><code>fullscreen</code></td><td><code>false</code></td><td>Enables full-screen mode at an optional breakpoint.</td></tr>
        <tr><td><code>role</code></td><td><code>"dialog"</code></td><td>Sets the dialog ARIA role.</td></tr>
        <tr><td><code>size</code></td><td><code>undefined</code></td><td>Accepts <code>"sm"</code>, <code>"lg"</code> or <code>"xl"</code>.</td></tr>
        <tr><td><code>ariaLabelledBy</code>, <code>ariaDescribedBy</code></td><td><code>undefined</code></td><td>Connect accessible label and description elements.</td></tr>
        <tr><td><code>container</code>, <code>injector</code>, <code>bindings</code></td><td><code>undefined</code></td><td>Control content creation and placement.</td></tr>
        <tr><td><code>windowClass</code>, <code>modalDialogClass</code>, <code>backdropClass</code></td><td><code>undefined</code></td><td>Add custom classes.</td></tr>
        <tr><td><code>beforeDismiss</code></td><td><code>undefined</code></td><td>Can cancel dismissal synchronously or asynchronously.</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component.html`,`<docs-example-section fragment="basic-datepicker" title="Basic datepicker" description="Bind an NgbDateStruct model to an inline calendar." html-code="$.examples.basic.html" ts-code="$.examples.basic.typescript"><docs-basic-datepicker></docs-basic-datepicker></docs-example-section>
<docs-example-section fragment="popup-datepicker" title="Datepicker in a popup" description="Attach the datepicker to an input and control its popup from a compact calendar button." html-code="$.examples.popup.html" ts-code="$.examples.popup.typescript"><docs-popup-datepicker></docs-popup-datepicker></docs-example-section>
<docs-example-section fragment="multiple-months-datepicker" title="Multiple months" description="Display two consecutive months while keeping a single date model." html-code="$.examples.multiple.html" ts-code="$.examples.multiple.typescript"><docs-multiple-months-datepicker></docs-multiple-months-datepicker></docs-example-section>
<docs-example-section fragment="range-datepicker" title="Range selection" description="Compose a date range from dateSelect and a custom day template with hover feedback." html-code="$.examples.range.html" ts-code="$.examples.range.typescript" css-code="$.examples.range.css"><docs-range-datepicker></docs-range-datepicker></docs-example-section>
<docs-example-section fragment="range-popup-datepicker" title="Range selection in a popup" description="Use the same range state and custom day view inside an input datepicker." html-code="$.examples.rangePopup.html" ts-code="$.examples.rangePopup.typescript" css-code="$.examples.rangePopup.css"><docs-range-popup-datepicker></docs-range-popup-datepicker></docs-example-section>
<docs-example-section fragment="disabled-datepicker" title="Disabled datepicker" description="Drive the disabled state through AngularJS ng-disabled." html-code="$.examples.disabled.html" ts-code="$.examples.disabled.typescript"><docs-disabled-datepicker></docs-disabled-datepicker></docs-example-section>
<docs-example-section fragment="datepicker-custom-adapter" title="Custom date adapter and formatter" description="Keep a string application model while presenting and parsing a different input format." html-code="$.examples.adapter.html" ts-code="$.examples.adapter.typescript"><docs-datepicker-custom-adapter></docs-datepicker-custom-adapter></docs-example-section>
<docs-example-section fragment="datepicker-i18n" title="Internationalization of datepickers" description="Supply labels and accessible date descriptions per datepicker instance through NgbDatepickerI18n." html-code="$.examples.i18n.html" ts-code="$.examples.i18n.typescript"><docs-datepicker-i18n></docs-datepicker-i18n></docs-example-section>
<docs-example-section fragment="datepicker-custom-day" title="Custom day view" description="Render weekends, today, selection and focus states with a custom day template." html-code="$.examples.customDay.html" ts-code="$.examples.customDay.typescript" css-code="$.examples.customDay.css"><docs-datepicker-custom-day></docs-datepicker-custom-day></docs-example-section>
<docs-example-section fragment="datepicker-custom-month" title="Custom month layout" description="Replace the datepicker content while reusing its public month view and navigation API." html-code="$.examples.customMonth.html" ts-code="$.examples.customMonth.typescript" css-code="$.examples.customMonth.css"><docs-datepicker-custom-month></docs-datepicker-custom-month></docs-example-section>
<docs-example-section fragment="datepicker-footer" title="Footer template" description="Add Today and Clear actions below the calendar with a footer template." html-code="$.examples.footer.html" ts-code="$.examples.footer.typescript"><docs-datepicker-footer></docs-datepicker-footer></docs-example-section>
<docs-example-section fragment="datepicker-position-target" title="Position target" description="Trigger the popup from an input while positioning it against a separate element." html-code="$.examples.position.html" ts-code="$.examples.position.typescript"><docs-datepicker-position-target></docs-datepicker-position-target></docs-example-section>
<docs-example-section fragment="datepicker-keyboard" title="Custom keyboard navigation" description="Add application-specific month navigation keys without removing the built-in keyboard behavior." html-code="$.examples.keyboard.html" ts-code="$.examples.keyboard.typescript"><docs-datepicker-keyboard></docs-datepicker-keyboard></docs-example-section>
<docs-example-section fragment="datepicker-global" title="Global configuration of datepickers" description="Change defaults for inline and input datepickers through their configuration services." html-code="$.examples.global.html" ts-code="$.examples.global.typescript"><docs-datepicker-global></docs-datepicker-global></docs-example-section>
`),e.put(`src/app/features/lib/pages/datepicker-calendars-page/datepicker-calendars-page.component.html`,`<div class="alert alert-light border mb-5" role="note">
    <div class="d-flex gap-3 align-items-start">
        <i class="bi bi-calendar3 text-primary mt-1" aria-hidden="true"></i>
        <div>
            <h2 class="h5 mb-2">Calendar implementations</h2>
            <p class="text-body-secondary mb-0"><code>NgbDatepicker</code> delegates date calculations to the abstract <code>NgbCalendar</code>. Gregorian is the default, but each instance can receive a calendar and its matching internationalization strategy.</p>
        </div>
    </div>
</div>

<section id="calendar-hebrew" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-hebrew">
    <h2 class="h3 mb-2">Hebrew</h2><p class="text-body-secondary mb-4"><code>NgbCalendarHebrew</code> with <code>NgbDatepickerI18nHebrew</code>, including Hebrew month names and numerals.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.hebrew.date" calendar="$.calendars.hebrew.calendar" i18n="$.calendars.hebrew.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-jalali" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-jalali">
    <h2 class="h3 mb-2">Jalali</h2><p class="text-body-secondary mb-4"><code>NgbCalendarPersian</code> performs Persian calendar calculations; the labels are supplied independently through <code>NgbDatepickerI18n</code>.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.jalali.date" calendar="$.calendars.jalali.calendar" i18n="$.calendars.jalali.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-islamic-civil" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-islamic-civil">
    <h2 class="h3 mb-2">Islamic Civil</h2><p class="text-body-secondary mb-4"><code>NgbCalendarIslamicCivil</code> uses the tabular civil Hijri calculation.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.islamicCivil.date" calendar="$.calendars.islamicCivil.calendar" i18n="$.calendars.islamicCivil.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-islamic-umalqura" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-islamic-umalqura">
    <h2 class="h3 mb-2">Islamic Umm al-Qura</h2><p class="text-body-secondary mb-4"><code>NgbCalendarIslamicUmalqura</code> uses the Umm al-Qura calendar data while sharing the Hijri presentation layer.</p>
    <div dir="rtl" class="d-inline-block"><ngb-datepicker ng-model="$.calendars.islamicUmalqura.date" calendar="$.calendars.islamicUmalqura.calendar" i18n="$.calendars.islamicUmalqura.i18n"></ngb-datepicker></div>
</section>

<section id="calendar-buddhist" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-buddhist">
    <h2 class="h3 mb-2">Buddhist</h2><p class="text-body-secondary mb-4"><code>NgbCalendarBuddhist</code> keeps Gregorian month rules and presents years in the Buddhist era.</p>
    <ngb-datepicker ng-model="$.calendars.buddhist.date" calendar="$.calendars.buddhist.calendar" i18n="$.calendars.buddhist.i18n"></ngb-datepicker>
</section>

<section id="calendar-ethiopian" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-ethiopian">
    <h2 class="h3 mb-2">Ethiopian</h2><p class="text-body-secondary mb-4"><code>NgbCalendarEthiopian</code> and <code>NgbDatepickerI18nAmharic</code> include the thirteenth Ethiopian month.</p>
    <ngb-datepicker ng-model="$.calendars.ethiopian.date" calendar="$.calendars.ethiopian.calendar" i18n="$.calendars.ethiopian.i18n"></ngb-datepicker>
</section>

<section id="calendar-intergalactic" class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="calendar-intergalactic">
    <h2 class="h3 mb-2">Intergalactic Standard <span class="small fw-normal text-body-secondary">(just for fun)</span></h2>
    <p class="text-body-secondary mb-4">A custom <code>NgbDatepickerI18n</code> translates Gregorian labels into the Standard Galactic Alphabet. The calendar math stays Gregorian—space-time remains someone else's problem.</p>
    <ngb-datepicker ng-model="$.calendars.intergalactic.date" calendar="$.calendars.intergalactic.calendar" i18n="$.calendars.intergalactic.i18n"></ngb-datepicker>
</section>
`),e.put(`src/app/features/lib/pages/dropdown-api-page/dropdown-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbDropdown</code></h2>
        <p class="text-body-secondary mb-0">Root controller for open state, positioning, focus and auto-close behavior.</p>
    </header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-dropdown&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td><td>Controls which interactions close the menu.</td></tr>
            <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>undefined</code></td><td>Exposed by the directive factory; it currently has no runtime effect.</td></tr>
            <tr><td><code>container</code></td><td><code>@?</code></td><td><code>null | "body"</code></td><td><code>null</code></td><td>Moves the menu to the document body.</td></tr>
            <tr><td><code>display</code></td><td><code>&lt;?</code></td><td><code>"dynamic" | "static"</code></td><td>Contextual</td><td>Enables or bypasses Popper positioning.</td></tr>
            <tr><td><code>dropdown-class</code></td><td><code>&lt;?</code></td><td><code>string</code></td><td>—</td><td>Adds a class to the dropdown container.</td></tr>
            <tr><td><code>open</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Sets the open state.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>Placement[]</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>function</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0">
        <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
        <tbody><tr><td><code>open-change</code></td><td><code>&amp;?</code></td><td><code>$event: boolean</code></td><td>The dropdown opens or closes.</td></tr></tbody>
    </table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-anchor">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownAnchor</code></h2><p class="text-body-secondary mb-0">Marks the element used for positioning without adding click behavior.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-anchor&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-toggle">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownToggle</code></h2><p class="text-body-secondary mb-0">Extends the anchor with click and keyboard toggle behavior.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-toggle&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-menu">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownMenu</code></h2><p class="text-body-secondary mb-0">Hosts menu items and coordinates keyboard navigation with the root dropdown.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;div ngb-dropdown-menu&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-dropdown</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-item">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownItem</code></h2><p class="text-body-secondary mb-0">Marks an interactive menu entry and integrates with <code>ng-disabled</code>.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;button ngb-dropdown-item&gt;</code></dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>
        <tr><td><code>tabindex</code></td><td><code>&lt;?</code></td><td><code>string | number</code></td><td><code>0</code></td><td>Sets the enabled tab order.</td></tr>
        <tr><td><code>ng-disabled</code></td><td><code>ngDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables focus and activation.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-dropdown-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbDropdownConfig</code></h2><p class="text-body-secondary mb-0">Provides application-wide dropdown defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>autoClose</code></td><td><code>boolean | "inside" | "outside"</code></td><td><code>true</code></td></tr>
        <tr><td><code>container</code></td><td><code>null | "body"</code></td><td><code>null</code></td></tr>
        <tr><td><code>placement</code></td><td><code>Placement[]</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td><code>function</code></td><td>Identity transform</td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/collapse-examples-page/collapse-examples-page.component.html`,`<docs-example-section
    fragment="simple-collapse"
    title="Simple collapse"
    description="Control the same panel by calling toggle() on its controller or by changing the bound collapsed value."
    html-code="$.examples.simple.html"
    ts-code="$.examples.simple.typescript">
    <docs-simple-collapse></docs-simple-collapse>
</docs-example-section>

<docs-example-section
    fragment="horizontal-collapse"
    title="Horizontal collapse"
    description="Set horizontal to true to animate the element's width instead of its height."
    html-code="$.examples.horizontal.html"
    ts-code="$.examples.horizontal.typescript">
    <docs-horizontal-collapse></docs-horizontal-collapse>
</docs-example-section>

<docs-example-section
    fragment="navbar-collapse"
    title="Responsive navbar"
    description="Combine NgbCollapse with Bootstrap's navbar classes to provide compact navigation on smaller viewports."
    html-code="$.examples.navbar.html"
    ts-code="$.examples.navbar.typescript">
    <docs-navbar-collapse></docs-navbar-collapse>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/datepicker-api-page/datepicker-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Component</p><h2 class="h3 mb-2"><code class="text-body">NgbDatepicker</code></h2><p class="text-body-secondary mb-0">Renders an inline calendar and integrates its selected date with AngularJS forms.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-datepicker ng-model="date"&gt;</code></dd><dt class="col-sm-3 fw-semibold">Integration</dt><dd class="col-sm-9 mb-0">Optionally reads <code>ng-model</code> and <code>ng-disabled</code>.</dd></dl>
    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>calendar</code></td><td><code>&lt;?</code></td><td><code>NgbCalendarGregorian</code></td><td>Calendar system used for date arithmetic.</td></tr>
            <tr><td><code>date-adapter</code></td><td><code>&lt;?</code></td><td><code>NgbDateStructAdapter</code></td><td>Converts between the model and <code>NgbDateStruct</code>.</td></tr>
            <tr><td><code>i18n</code></td><td><code>&lt;?</code></td><td><code>NgbDatepickerI18nDefault</code></td><td>Supplies localized labels.</td></tr>
            <tr><td><code>display-months</code></td><td><code>&lt;?</code></td><td><code>1</code></td><td>Number of visible months.</td></tr>
            <tr><td><code>first-day-of-week</code></td><td><code>&lt;?</code></td><td><code>1</code></td><td>First weekday, from 1 (Monday) to 7 (Sunday).</td></tr>
            <tr><td><code>min-date</code>, <code>max-date</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Selectable date boundaries.</td></tr>
            <tr><td><code>start-date</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Initial month displayed when no model is selected.</td></tr>
            <tr><td><code>navigation</code></td><td><code>@?</code></td><td><code>"select"</code></td><td>Accepts <code>"select"</code>, <code>"arrows"</code> or <code>"none"</code>.</td></tr>
            <tr><td><code>outside-days</code></td><td><code>@?</code></td><td><code>"visible"</code></td><td>Controls days outside the current month.</td></tr>
            <tr><td><code>weekdays</code></td><td><code>&lt;?</code></td><td><code>"narrow"</code></td><td>Controls weekday labels and width.</td></tr>
            <tr><td><code>show-week-numbers</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Displays week numbers.</td></tr>
            <tr><td><code>mark-disabled</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Function that disables individual dates.</td></tr>
            <tr><td><code>day-template</code>, <code>footer-template</code>, <code>content-template</code></td><td><code>&lt;?</code></td><td>Built-in templates</td><td>Customize calendar rendering.</td></tr>
            <tr><td><code>day-template-data</code></td><td><code>&lt;?</code></td><td><code>undefined</code></td><td>Supplies custom data to day templates.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>date-select</code></td><td><code>$event: NgbDate</code></td><td>A date is selected.</td></tr>
        <tr><td><code>navigate</code></td><td><code>$event: NgbDatepickerNavigateEvent</code></td><td>The visible month changes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-input-datepicker">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Directive</p><h2 class="h3 mb-2"><code class="text-body">NgbInputDatepicker</code></h2><p class="text-body-secondary mb-0">Adds a popup calendar to an input while preserving AngularJS model parsing and validation.</p></header>
    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;input ng-model="date" ngb-datepicker&gt;</code></dd><dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0"><code>ng-model</code>; optionally reads <code>ng-disabled</code>.</dd></dl>
    <p class="small text-body-secondary mt-3 mb-0">Accepts the calendar inputs above plus the popup-specific inputs below.</p>
    <h3 class="h5 mt-4 mb-3">Popup inputs</h3>
    <div class="table-responsive"><table class="table table-sm align-middle">
        <thead><tr><th>Input</th><th>Binding</th><th>Default</th><th>Description</th></tr></thead><tbody>
            <tr><td><code>auto-close</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Controls which selections or outside clicks close the popup.</td></tr>
            <tr><td><code>container</code></td><td><code>@?</code></td><td><code>null</code></td><td>Accepts <code>"body"</code> to move the popup.</td></tr>
            <tr><td><code>placement</code></td><td><code>&lt;?</code></td><td><code>$config.placement</code></td><td>Preferred Popper placements.</td></tr>
            <tr><td><code>popper-options</code></td><td><code>&lt;?</code></td><td><code>$config.popperOptions</code></td><td>Transforms Popper options.</td></tr>
            <tr><td><code>position-target</code></td><td><code>&lt;?</code></td><td>Input element</td><td>Overrides the positioning target.</td></tr>
            <tr><td><code>restore-focus</code></td><td><code>&lt;?</code></td><td><code>true</code></td><td>Restores focus after closing.</td></tr>
            <tr><td><code>datepicker-class</code></td><td><code>@?</code></td><td>—</td><td>Adds a class to the popup calendar.</td></tr>
            <tr><td><code>parser-formatter</code></td><td><code>&lt;?</code></td><td><code>NgbDateISOParserFormatter</code></td><td>Parses and formats the input text.</td></tr>
            <tr><td><code>disabled</code></td><td><code>&lt;?</code></td><td><code>false</code></td><td>Disables input behavior.</td></tr>
        </tbody>
    </table></div>
    <h3 class="h5 mt-4 mb-3">Additional output</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Output</th><th>Payload</th><th>Emitted when</th></tr></thead><tbody>
        <tr><td><code>closed</code></td><td>None</td><td>The popup calendar closes.</td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbDatepickerConfig</code></h2><p class="text-body-secondary mb-0">Provides defaults for inline and popup calendars.</p></header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>displayMonths</code>, <code>firstDayOfWeek</code></td><td><code>1</code></td></tr>
        <tr><td><code>navigation</code></td><td><code>"select"</code></td></tr>
        <tr><td><code>outsideDays</code></td><td><code>"visible"</code></td></tr>
        <tr><td><code>weekdays</code></td><td><code>"narrow"</code></td></tr>
        <tr><td><code>showWeekNumbers</code></td><td><code>false</code></td></tr>
        <tr><td><code>minDate</code>, <code>maxDate</code>, <code>startDate</code>, templates and callbacks</td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-input-datepicker-config">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Service</p><h2 class="h3 mb-2"><code class="text-body">NgbInputDatepickerConfig</code></h2><p class="text-body-secondary mb-0">Extends <code>NgbDatepickerConfig</code> with popup defaults.</p></header>
    <h3 class="h5 mt-4 mb-3">Additional properties</h3>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Property</th><th>Default</th></tr></thead><tbody>
        <tr><td><code>autoClose</code></td><td><code>true</code></td></tr>
        <tr><td><code>container</code></td><td><code>null</code></td></tr>
        <tr><td><code>placement</code></td><td><code>["bottom-start", "bottom-end", "top-start", "top-end"]</code></td></tr>
        <tr><td><code>popperOptions</code></td><td>Identity transform</td></tr>
        <tr><td><code>restoreFocus</code></td><td><code>true</code></td></tr>
        <tr><td><code>positionTarget</code></td><td><code>undefined</code></td></tr>
    </tbody></table></div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-datepicker-extension-contracts">
    <header class="mb-3"><p class="small fw-semibold text-primary mb-1">Interfaces</p><h2 class="h3 mb-2">Calendar and formatting contracts</h2><p class="text-body-secondary mb-0">Pass custom implementations through the corresponding datepicker inputs.</p></header>
    <div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead><tr><th>Contract</th><th>Purpose</th><th>Core methods</th></tr></thead><tbody>
        <tr><td><code>NgbCalendar</code></td><td>Date arithmetic and calendar rules.</td><td><code>getNext()</code>, <code>getPrev()</code>, <code>getToday()</code>, <code>isValid()</code></td></tr>
        <tr><td><code>NgbDateAdapter&lt;D&gt;</code></td><td>Application model conversion.</td><td><code>fromModel()</code>, <code>toModel()</code></td></tr>
        <tr><td><code>NgbDateParserFormatter</code></td><td>Popup input text conversion.</td><td><code>parse()</code>, <code>format()</code></td></tr>
        <tr><td><code>NgbDatepickerI18n</code></td><td>Localized month, weekday, day and ARIA labels.</td><td><code>getWeekdayLabel()</code>, <code>getMonthFullName()</code>, <code>getDayAriaLabel()</code></td></tr>
    </tbody></table></div>
</section>
`),e.put(`src/app/features/lib/pages/carousel-api-page/carousel-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-carousel">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Component</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCarousel</code></h2>
        <p class="text-body-secondary mb-0">Coordinates slides, navigation, cycling, pause behavior and transitions.</p>
    </header>

    <dl class="row gy-2 mb-0"><dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ngb-carousel&gt;</code></dd></dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>active-id</code></td><td><code>@?</code></td><td><code>string</code></td><td>First slide</td><td>Identifies the active slide.</td></tr>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables slide transitions.</td></tr>
                <tr><td><code>interval</code></td><td><code>&lt;?</code></td><td><code>number</code></td><td><code>5000</code></td><td>Delay between automatic slides in milliseconds; <code>0</code> disables cycling.</td></tr>
                <tr><td><code>keyboard</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enables keyboard navigation.</td></tr>
                <tr><td><code>pause-on-focus</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Pauses cycling while focused.</td></tr>
                <tr><td><code>pause-on-hover</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Pauses cycling while hovered.</td></tr>
                <tr><td><code>show-navigation-arrows</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Displays previous and next controls.</td></tr>
                <tr><td><code>show-navigation-indicators</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Displays slide indicators.</td></tr>
                <tr><td><code>wrap</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Wraps navigation at the first and last slide.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>slide</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSlideEvent</code></td><td>A slide transition starts.</td></tr>
                <tr><td><code>slid</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSlideEvent</code></td><td>A slide transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-slide">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbSlide</code></h2>
        <p class="text-body-secondary mb-0">Marks projected content as a carousel slide.</p>
    </header>
    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt><dd class="col-sm-9 mb-0"><code>&lt;ng-template ngb-slide&gt;</code></dd>
        <dt class="col-sm-3 fw-semibold">Requires</dt><dd class="col-sm-9 mb-0">An ancestor <code>ngb-carousel</code>.</dd>
    </dl>
    <h3 class="h5 mt-4 mb-3">Bindings</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Name</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>id</code></td><td><code>@?</code></td><td><code>string</code></td><td>Generated id</td><td>Identifies the slide.</td></tr>
                <tr><td><code>slid</code></td><td><code>&amp;?</code></td><td><code>$event: NgbSingleSlideEvent</code></td><td>—</td><td>Runs when this slide completes a transition.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-carousel-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCarouselConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide carousel defaults.</p>
    </header>
    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td></tr>
                <tr><td><code>interval</code></td><td><code>number</code></td><td><code>5000</code></td></tr>
                <tr><td><code>wrap</code>, <code>keyboard</code>, <code>pauseOnFocus</code>, <code>pauseOnHover</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
                <tr><td><code>showNavigationArrows</code>, <code>showNavigationIndicators</code></td><td><code>boolean</code></td><td><code>true</code></td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/pages/collapse-api-page/collapse-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-collapse">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCollapse</code></h2>
        <p class="text-body-secondary mb-0">
            Controls the visible state of an element and runs vertical or horizontal Bootstrap collapse transitions.
        </p>
    </header>

    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-collapse="isCollapsed"&gt;</code></dd>
    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>ngb-collapse</code></td><td><code>&lt;</code></td><td><code>boolean</code></td><td>Required</td><td>Sets whether the host is collapsed.</td></tr>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables transition animation.</td></tr>
                <tr><td><code>horizontal</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses width instead of height for the transition.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>ngb-collapse-change</code></td><td><code>&amp;?</code></td><td><code>$event: boolean</code></td><td><code>toggle()</code> changes the collapsed state.</td></tr>
                <tr><td><code>shown</code></td><td><code>&amp;?</code></td><td>None</td><td>The expand transition finishes.</td></tr>
                <tr><td><code>ngb-hidden</code></td><td><code>&amp;?</code></td><td>None</td><td>The collapse transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-collapse-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbCollapseConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide defaults for collapse directives.</p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Default transition animation state.</td></tr>
                <tr><td><code>horizontal</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Default transition orientation.</td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/pages/carousel-examples-page/carousel-examples-page.component.html`,`<docs-example-section
    fragment="carousel-simple"
    title="Simple carousel"
    description="A carousel using the default options, including navigation arrows and indicators."
    html-code="$.examples.simple.html">
    <docs-carousel-simple></docs-carousel-simple>
</docs-example-section>

<docs-example-section
    fragment="carousel-keyboard"
    title="Keyboard navigation"
    description="A carousel without visible controls or indicators that moves only with the left and right arrow keys."
    html-code="$.examples.keyboard.html">
    <docs-carousel-keyboard></docs-carousel-keyboard>
</docs-example-section>

<docs-example-section
    fragment="carousel-controls"
    title="Pause controls"
    description="Try the native hover and focus options, then compose navigation behavior from slide events."
    html-code="$.examples.controls.html"
    ts-code="$.examples.controls.typescript">
    <docs-carousel-controls></docs-carousel-controls>
</docs-example-section>

<docs-example-section
    fragment="carousel-global"
    title="Global configuration"
    description="Change NgbCarouselConfig once to define carousel defaults without adding local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-carousel-global></docs-carousel-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/alert-examples-page/alert-examples-page.component.html`,`<docs-example-section
    fragment="simple-alert"
    title="Simple alert"
    description="A basic alert with a fixed type and no dismiss button."
    html-code="$.examples.simple.html">
    <docs-simple-alert></docs-simple-alert>
</docs-example-section>

<docs-example-section
    fragment="alert-closeable"
    title="Closeable alerts"
    description="Four dismissible alerts: two close with animation and two close immediately."
    html-code="$.examples.closeable.html"
    ts-code="$.examples.closeable.typescript">
    <docs-alert-closeable></docs-alert-closeable>
</docs-example-section>

<docs-example-section
    fragment="self-closing-alert"
    title="Self-closing alert"
    description="A timeout updates the countdown and closes the alert when it reaches zero."
    html-code="$.examples.selfClosing.html"
    ts-code="$.examples.selfClosing.typescript">
    <docs-self-closing-alert></docs-self-closing-alert>
</docs-example-section>

<docs-example-section
    fragment="alert-custom"
    title="Custom alert"
    description="A custom alert type styled through the alert-custom class and Bootstrap variables."
    html-code="$.examples.custom.html"
    css-code="$.examples.custom.css">
    <docs-alert-custom></docs-alert-custom>
</docs-example-section>

<docs-example-section
    fragment="alert-global"
    title="Global configuration"
    description="Change NgbAlertConfig once to define defaults for alerts without local inputs."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-alert-global></docs-alert-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/accordion-examples-page/accordion-examples-page.component.html`,`<docs-example-section
    fragment="accordion-simple"
    title="Basic accordion"
    description="Three items with a regular header, a header rendered from a template and a disabled item."
    html-code="$.examples.simple.html">
    <docs-accordion-simple></docs-accordion-simple>
</docs-example-section>

<docs-example-section
    fragment="one-panel-accordion"
    title="One panel at a time"
    description="Opening an item automatically closes the previously expanded panel."
    html-code="$.examples.onePanel.html">
    <docs-one-panel-accordion></docs-one-panel-accordion>
</docs-example-section>

<docs-example-section
    fragment="accordion-toggle-panels"
    title="Programmatic controls"
    description="Use the accordion controller to expand, collapse or toggle panels by id."
    html-code="$.examples.togglePanels.html"
    ts-code="$.examples.togglePanels.typescript">
    <docs-accordion-toggle-panels></docs-accordion-toggle-panels>
</docs-example-section>

<docs-example-section
    fragment="accordion-custom-header"
    title="Custom headers"
    description="Build richer triggers with Bootstrap utilities while keeping the accordion behavior and accessibility state."
    html-code="$.examples.customHeader.html">
    <docs-accordion-custom-header></docs-accordion-custom-header>
</docs-example-section>

<docs-example-section
    fragment="accordion-content"
    title="Preserve panel content"
    description="Keep collapsed content mounted when its local state must survive closing and reopening the panel."
    html-code="$.examples.content.html"
    ts-code="$.examples.content.typescript">
    <docs-accordion-content></docs-accordion-content>
</docs-example-section>

<docs-example-section
    fragment="accordion-global"
    title="Global configuration"
    description="Change NgbAccordionConfig once to define defaults for accordions that do not provide local values."
    html-code="$.examples.global.html"
    ts-code="$.examples.global.typescript">
    <docs-accordion-global></docs-accordion-global>
</docs-example-section>
`),e.put(`src/app/features/lib/pages/alert-api-page/alert-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-alert">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Component</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAlert</code></h2>
        <p class="text-body-secondary mb-0">
            Displays contextual feedback and optionally provides a dismiss action with an animated close transition.
        </p>
    </header>

    <dl class="row gy-2 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;ngb-alert&gt;</code></dd>
    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead><tr><th>Input</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Enables the close transition.</td></tr>
                <tr><td><code>dismissible</code></td><td><code>&lt;?</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Shows the dismiss button.</td></tr>
                <tr><td><code>type</code></td><td><code>@?</code></td><td><code>string</code></td><td><code>"warning"</code></td><td>Sets the Bootstrap contextual type.</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Output</th><th>Binding</th><th>Payload</th><th>Emitted when</th></tr></thead>
            <tbody>
                <tr><td><code>closed</code></td><td><code>&amp;?</code></td><td>None</td><td>The close transition finishes.</td></tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-alert-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAlertConfig</code></h2>
        <p class="text-body-secondary mb-0">Provides application-wide defaults for alert instances.</p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
                <tr><td><code>animation</code></td><td><code>boolean</code></td><td><code>$config.animation</code></td><td>Default close animation state.</td></tr>
                <tr><td><code>dismissible</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Default dismissible state.</td></tr>
                <tr><td><code>type</code></td><td><code>string</code></td><td><code>"warning"</code></td><td>Default contextual type.</td></tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.html`,`<label class="form-label" for="wikipedia-typeahead">Search for a Wikipedia page</label>
<input id="wikipedia-typeahead" type="text" class="form-control" ng-class="{ 'is-invalid': example.searchFailed }" ng-model="example.model" ngb-typeahead="example.search" placeholder="Wikipedia search">
<div class="form-text" ng-if="example.searching">Searching…</div>
<div class="invalid-feedback" ng-if="example.searchFailed">Suggestions could not be loaded.</div>
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/typeahead-global/typeahead-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hint completion, exact-match selection and a popup appended to body.</p>
    </div>
</div>

<label class="form-label" for="global-typeahead">Search for a state</label>
<input id="global-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Try Cal">
`),e.put(`src/app/features/lib/components/vertical-nav/vertical-nav.component.html`,`<div class="d-flex align-items-start gap-3">
    <div
        ngb-nav
        ng-ref="example.nav"
        ng-ref-read="ngbNav"
        active-id="example.activeId"
        orientation="'vertical'"
        class="nav-pills flex-shrink-0">
        <div ngb-nav-item="vertical-profile">
            <button type="button" ngb-nav-link>Profile</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Profile</h3>
                <p class="mb-0">Manage your public information and preferences.</p>
            </ng-template>
        </div>
        <div ngb-nav-item="vertical-security">
            <button type="button" ngb-nav-link>Security</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Security</h3>
                <p class="mb-0">Review sessions, passwords and account access.</p>
            </ng-template>
        </div>
        <div ngb-nav-item="vertical-notifications">
            <button type="button" ngb-nav-link>Notifications</button>
            <ng-template ngb-nav-content>
                <h3 class="h5">Notifications</h3>
                <p class="mb-0">Choose when and how the application contacts you.</p>
            </ng-template>
        </div>
    </div>

    <div class="border rounded p-3 flex-grow-1" ngb-nav-outlet="example.nav"></div>
</div>
`),e.put(`src/app/features/lib/components/tooltip-triggers/tooltip-triggers.component.html`,`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
<button type="button" class="btn btn-outline-secondary mb-4" ngb-tooltip="'Shown while the pointer is over the trigger'" triggers="'mouseenter:mouseleave'">Hover over me</button>

<p class="mb-3">Manual triggers delegate opening and closing to application code.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="'Manually controlled tooltip'" triggers="'manual'" auto-close="false" ng-ref="example.manual" ng-ref-read="ngbTooltip" ng-click="example.manual.open()">Open tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.close()">Close tooltip</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.toggle()">Toggle tooltip</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-template/tooltip-template.component.html`,`<ng-template ng-ref="example.contentTemplate">
    <span>Hello, <strong>{{ example.name }}</strong>!</span>
</ng-template>

<div class="d-flex flex-wrap align-items-center gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-tooltip="example.contentTemplate">HTML and bindings</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.name = example.name === 'NgbJS' ? 'AngularJS' : 'NgbJS'">Change binding</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-placements/tooltip-placements.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Tooltip on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-tooltip="'Tooltip on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-tooltip="'Tooltip on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-tooltip="'Tooltip on left'">Left</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-global/tooltip-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p>
    </div>
</div>

<button type="button" class="btn btn-outline-primary" ngb-tooltip="'This instance reads every option from NgbTooltipConfig.'">Hover over me</button>
`),e.put(`src/app/features/lib/pages/accordion-api-page/accordion-api-page.component.html`,`<div class="d-flex flex-wrap gap-2 mb-5" aria-label="Binding legend">
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&lt;?</code> input</span>
    <span class="badge bg-body-tertiary border text-body fw-normal px-3 py-2"><code>&amp;?</code> callback</span>
</div>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordion</code></h2>
        <p class="text-body-secondary mb-0">
            Root directive that coordinates all accordion items. It applies the Bootstrap accordion structure,
            controls whether multiple items may remain open and exposes methods for toggling items by id.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion&gt;</code></dd>

    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">Input</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>animation</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>$config.animation</code></td>
                    <td>Enables the collapse transition.</td>
                </tr>
                <tr>
                    <td><code>close-others</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Closes the currently expanded item before another one opens.</td>
                </tr>
                <tr>
                    <td><code>destroy-on-hide</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Removes a collapsed item's body view from the DOM.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Output</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Payload</th>
                    <th scope="col">Emitted when</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>show</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item starts expanding; <code>$event</code> is its id.</td>
                </tr>
                <tr>
                    <td><code>shown</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item finishes expanding.</td>
                </tr>
                <tr>
                    <td><code>hide</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item starts collapsing.</td>
                </tr>
                <tr>
                    <td><code>hidden</code></td>
                    <td><code>&amp;?</code></td>
                    <td><code>$event: string</code></td>
                    <td>An item finishes collapsing.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-item">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionItem</code></h2>
        <p class="text-body-secondary mb-0">
            Represents one collapsible item. It owns the item id and collapsed state, applies per-item
            <code>destroyOnHide</code> behavior and emits the item lifecycle events.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion-item="'details'"&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            An ancestor <code>ngb-accordion</code>; optionally reads <code>ng-disabled</code>.
        </dd>

    </dl>

    <h3 class="h5 mt-4 mb-3">Inputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">Input</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>ngb-accordion-item</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>string</code></td>
                    <td>Generated id</td>
                    <td>Expression that identifies the item in the parent accordion.</td>
                </tr>
                <tr>
                    <td><code>collapsed</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Controls the initial and current collapsed state.</td>
                </tr>
                <tr>
                    <td><code>destroy-on-hide</code></td>
                    <td><code>&lt;?</code></td>
                    <td><code>boolean</code></td>
                    <td>Inherited</td>
                    <td>Overrides the parent accordion setting for this item.</td>
                </tr>
                <tr>
                    <td><code>ng-disabled</code></td>
                    <td><code>ngDisabled</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Prevents the item's trigger from changing its state.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="h5 mt-4 mb-3">Outputs</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Output</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Payload</th>
                    <th scope="col">Emitted when</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>show</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item starts expanding.</td>
                </tr>
                <tr>
                    <td><code>shown</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item finishes expanding.</td>
                </tr>
                <tr>
                    <td><code>hide</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item starts collapsing.</td>
                </tr>
                <tr>
                    <td><code>hidden</code></td>
                    <td><code>&amp;?</code></td>
                    <td>None</td>
                    <td>This item finishes collapsing.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-header">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionHeader</code></h2>
        <p class="text-body-secondary mb-0">
            Marks an item's heading container. It adds the Bootstrap header class and heading semantics, and
            mirrors the collapsed state without handling the toggle action itself.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;h2 ngb-accordion-header&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">An ancestor <code>ngb-accordion-item</code>.</dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-button">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionButton</code></h2>
        <p class="text-body-secondary mb-0">
            Provides the standard Bootstrap accordion trigger. It configures the button type, classes and ARIA
            state, respects <code>ng-disabled</code> and toggles its containing item when clicked.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;button ngb-accordion-button&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            Ancestor controllers for <code>ngb-accordion-item</code> and <code>ngb-accordion</code>.
        </dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-toggle">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionToggle</code></h2>
        <p class="text-body-secondary mb-0">
            Adds toggle behavior and accessible state to custom header markup. Use it when the trigger should not
            receive the standard <code>accordion-button</code> presentation supplied by
            <code>NgbAccordionButton</code>.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;span ngb-accordion-toggle&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">
            Ancestor controllers for <code>ngb-accordion-item</code> and <code>ngb-accordion</code>.
        </dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-body">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Directive</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionBody</code></h2>
        <p class="text-body-secondary mb-0">
            Hosts the item's body template. Content is supplied through a child <code>ng-template</code> and its
            embedded view is created or destroyed according to the item state and <code>destroyOnHide</code>.
        </p>
    </header>

    <dl class="row gy-3 mb-0">
        <dt class="col-sm-3 fw-semibold">Markup</dt>
        <dd class="col-sm-9 mb-0"><code>&lt;div ngb-accordion-body&gt;</code></dd>

        <dt class="col-sm-3 fw-semibold">Requires</dt>
        <dd class="col-sm-9 mb-0">An ancestor <code>ngb-accordion-item</code>.</dd>
    </dl>

    <p class="small text-body-secondary mt-3 mb-0">No public inputs or outputs.</p>
</section>

<section class="pb-4 mb-4 border-bottom" ngb-scroll-spy-fragment="ngb-accordion-config">
    <header class="mb-3">
        <p class="small fw-semibold text-primary mb-1">Service</p>
        <h2 class="h3 mb-2"><code class="text-body">NgbAccordionConfig</code></h2>
        <p class="text-body-secondary mb-0">
            Provides application-wide default values for accordions. Configure it once during application setup;
            values supplied directly to an <code>ngb-accordion</code> instance take precedence.
        </p>
    </header>

    <h3 class="h5 mt-4 mb-3">Properties</h3>
    <div class="table-responsive">
        <table class="table table-sm align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">Property</th>
                    <th scope="col">Type</th>
                    <th scope="col">Default</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>animation</code></td>
                    <td><code>boolean</code></td>
                    <td><code>$config.animation</code></td>
                    <td>Sets the default animation behavior for every accordion.</td>
                </tr>
                <tr>
                    <td><code>closeOthers</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Sets whether opening an item closes the previously expanded item.</td>
                </tr>
                <tr>
                    <td><code>destroyOnHide</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Sets whether hidden body views are removed from the DOM.</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
`),e.put(`src/app/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.html`,`<button type="button" class="btn btn-outline-primary" ngb-tooltip="'A custom skin layered on top of Bootstrap tooltip variables.'" tooltip-class="docs-tooltip-custom">
    Tooltip with custom class
</button>
`),e.put(`src/app/features/lib/components/tooltip-context/tooltip-context.component.html`,`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>

<p>Pass a different context each time a tooltip is opened manually.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.french, 'Bonjour')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbTooltip" ng-click="example.toggleWithGreeting(example.english, 'Hello')">English</button>
</div>

<p>Alternatively, provide a default context through <code>tooltip-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-tooltip="example.contentTemplate" tooltip-context="{ greeting: 'Hola' }">Spanish</button>
`),e.put(`src/app/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.html`,`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can hover</span>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'The button triggered me, but the text positioned me.'" position-target="#tooltip-position-target">this button</button>
    <span>while the tooltip appears over <strong id="tooltip-position-target" class="text-primary">this target</strong>.</span>
</div>
`),e.put(`src/app/features/lib/components/tooltip-delays/tooltip-delays.component.html`,`<p>Move the pointer into the tooltip before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-tooltip="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`),e.put(`src/app/features/lib/components/tooltip-body/tooltip-body.component.html`,`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-tooltip="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-tooltip="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.html`,`<ng-template ng-ref="example.contentTemplate">
    <button type="button" class="btn btn-sm btn-light">Click inside</button>
</ng-template>

<p>Every tooltip can also be closed with <kbd>Esc</kbd>.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'inside'" ngb-tooltip="example.contentTemplate">Inside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="'outside'" ngb-tooltip="example.contentTemplate">Outside clicks</button>
    <button type="button" class="btn btn-outline-secondary" triggers="'click'" auto-close="true" ngb-tooltip="example.contentTemplate">All clicks</button>
</div>
`),e.put(`src/app/features/lib/components/toast-management/toast-management.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary" ng-click="example.showStandard()">Standard</button>
    <button type="button" class="btn btn-success" ng-click="example.showSuccess()">Success</button>
    <button type="button" class="btn btn-danger" ng-click="example.showDanger()">Danger</button>
    <button type="button" class="btn btn-outline-secondary" ng-click="example.toastService.clear()" ng-disabled="!example.toastService.toasts.length">Clear all</button>
</div>

<div class="toast-container position-static d-flex flex-column gap-2" aria-live="polite" aria-atomic="true">
    <ngb-toast
        ng-repeat="toast in example.toastService.toasts track by toast.id"
        class="{{ toast.className }}"
        autohide="true"
        delay="toast.delay || 5000"
        hidden="example.toastService.remove(toast)">
        {{ toast.body }}
    </ngb-toast>

    <p ng-if="!example.toastService.toasts.length" class="small text-body-secondary mb-0">No active toasts.</p>
</div>
`),e.put(`src/app/features/lib/components/timepicker-validation/timepicker-validation.component.html`,`<p>Select a time between 12:00 and 13:59.</p>

<form name="example.form" novalidate>
    <div class="d-flex flex-column align-items-start gap-2">
        <ngb-timepicker name="lunchtime" ng-model="example.time" docs-timepicker-lunch-validator required></ngb-timepicker>

        <div class="small text-success" ng-if="example.form.lunchtime.$valid">Great choice.</div>
        <div class="small text-danger" ng-if="example.form.lunchtime.$error.required">Select a lunchtime.</div>
        <div class="small text-danger" ng-if="example.form.lunchtime.$error.lunchtime">The selected time is too early or too late.</div>
    </div>
</form>

<hr>
<pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
`),e.put(`src/app/features/lib/components/timepicker-i18n/timepicker-i18n.component.html`,`<div class="alert alert-light border" role="note">
    Greek period labels supplied by a custom <code>NgbTimepickerI18n</code>:
    <strong>{{ example.i18n.getMorningPeriod() }}</strong> / <strong>{{ example.i18n.getAfternoonPeriod() }}</strong>
</div>

<div class="d-flex align-items-start">
    <ngb-timepicker ng-model="example.time" meridian="true"></ngb-timepicker>
</div>
`),e.put(`src/app/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="true" hour-step="example.hourStep" minute-step="example.minuteStep" second-step="example.secondStep"></ngb-timepicker>

    <div class="row g-3 align-self-stretch">
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-hour-step">Hour step</label>
            <input id="timepicker-hour-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.hourStep">
        </div>
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-minute-step">Minute step</label>
            <input id="timepicker-minute-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.minuteStep">
        </div>
        <div class="col-sm-4">
            <label class="form-label small" for="timepicker-second-step">Second step</label>
            <input id="timepicker-second-step" class="form-control form-control-sm" type="number" min="1" ng-model="example.secondStep">
        </div>
    </div>

    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component.html`,`<p>This adapter represents the application model as an <code>HH:mm:ss</code> string.</p>
<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="true"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">String model: {{ example.model }}</pre>
</div>
`),e.put(`src/app/features/lib/components/simple-typeahead/simple-typeahead.component.html`,`<label class="form-label" for="simple-typeahead">Search for a state</label>
<input id="simple-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" placeholder="Type at least two characters">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/template-results-typeahead/template-results-typeahead.component.html`,`<ng-template ng-ref="example.resultTemplate" let-result="result" let-term="term">
    <span class="d-flex align-items-center gap-2">
        <span class="fs-5" aria-hidden="true">{{ result.flag }}</span>
        <span class="flex-grow-1"><ngb-highlight result="result.name" term="term"></ngb-highlight></span>
        <small class="text-body-secondary">{{ result.region }}</small>
    </span>
</ng-template>

<label class="form-label" for="template-results-typeahead">Search for a country</label>
<input id="template-results-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-template="example.resultTemplate" input-formatter="example.formatter" placeholder="Try Mexico">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/template-header-toast/template-header-toast.component.html`,`<div class="toast-container position-static">
    <ngb-toast ng-if="example.visible" autohide="false" hidden="example.visible = false">
        <ng-template ngb-toast-header>
            <div class="d-flex align-items-center gap-2 me-auto">
                <i class="bi bi-stars text-primary" aria-hidden="true"></i>
                <strong>Custom header</strong>
                <small class="text-body-secondary">just now</small>
            </div>
        </ng-template>
        The complete header is rendered from an <code>ng-template</code>.
    </ngb-toast>

    <button ng-if="!example.visible" type="button" class="btn btn-sm btn-outline-primary" ng-click="example.visible = true">
        Show toast again
    </button>
</div>
`),e.put(`src/app/features/lib/components/striped-progress-bar/striped-progress-bar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25" striped="true"></ngb-progressbar>
    <ngb-progressbar type="info" value="50" striped="true"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100" striped="true"></ngb-progressbar>
    <ngb-progressbar type="primary" value="65" striped="true" animated="true">Animated</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/simple-nav/simple-nav.component.html`,`<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <li ngb-nav-item="simple-overview">
        <button type="button" ngb-nav-link>Overview</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">A concise overview of the current project.</p>
        </ng-template>
    </li>
    <li ngb-nav-item="simple-features">
        <button type="button" ngb-nav-link>Features</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Explore the features exposed by this library.</p>
        </ng-template>
    </li>
    <li ngb-nav-item="simple-settings">
        <button type="button" ngb-nav-link>Settings</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Adjust the settings for this example.</p>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/spinners-timepicker/spinners-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" spinners="example.spinners"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.spinners ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.spinners = !example.spinners">
        Spinners {{ example.spinners ? 'on' : 'off' }}
    </button>
</div>
`),e.put(`src/app/features/lib/components/simple-collapse/simple-collapse.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button
        type="button"
        class="btn btn-primary"
        ng-click="example.toggleWithController()"
        ng-attr-aria-expanded="{{ !example.collapsed }}"
        aria-controls="simple-collapse-panel">
        Toggle with controller
    </button>

    <button
        type="button"
        class="btn btn-outline-primary"
        ng-click="example.toggleWithBinding()"
        ng-attr-aria-expanded="{{ !example.collapsed }}"
        aria-controls="simple-collapse-panel">
        Toggle with two-way binding
    </button>
</div>

<div
    id="simple-collapse-panel"
    ngb-collapse="example.collapsed"
    ngb-collapse-change="example.collapsed = $event"
    ng-ref="collapse"
    ng-ref-read="ngbCollapse">
    <div class="card">
        <div class="card-body">
            Both buttons control this panel. One calls the controller and the other changes the bound value.
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/simple-progressbar/simple-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"></ngb-progressbar>
    <ngb-progressbar type="info" value="50"></ngb-progressbar>
    <ngb-progressbar type="warning" value="75"></ngb-progressbar>
    <ngb-progressbar type="danger" value="100"></ngb-progressbar>
    <ngb-progressbar type="primary" value="75"></ngb-progressbar>
    <ngb-progressbar type="secondary" value="50"></ngb-progressbar>
    <ngb-progressbar type="dark" value="25"></ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/simple-dropdown/simple-dropdown.component.html`,`<div class="d-flex flex-wrap align-items-center gap-3 py-5">
    <div ngb-dropdown placement="'bottom-start'">
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Bottom dropdown</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Profile</button>
            <button type="button" ngb-dropdown-item>Settings</button>
            <div class="dropdown-divider"></div>
            <button type="button" ngb-dropdown-item>Sign out</button>
        </div>
    </div>

    <div ngb-dropdown placement="'top-start'">
        <button type="button" class="btn btn-outline-primary" ngb-dropdown-toggle>Top dropdown</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Newest first</button>
            <button type="button" ngb-dropdown-item>Oldest first</button>
            <button type="button" ngb-dropdown-item>Recently updated</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/self-closing-alert/self-closing-alert.component.html`,`<div class="d-flex align-items-center justify-content-between gap-3 mb-3">
    <p class="small text-body-secondary mb-0">
        {{ example.visible ? 'The timer is running.' : 'The alert is closed.' }}
    </p>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.restart()">
        <i class="bi bi-arrow-clockwise me-1" aria-hidden="true"></i>
        {{ example.visible ? 'Restart timer' : 'Show again' }}
    </button>
</div>

<ngb-alert
    ng-if="example.visible"
    ng-ref="alert"
    ng-ref-read="ngbAlert"
    type="info"
    dismissible="true"
    animation="true"
    closed="example.onClosed()">
    This alert will close automatically in
    <strong>{{ example.remaining }} {{ example.remaining === 1 ? 'second' : 'seconds' }}</strong>.
</ngb-alert>
`),e.put(`src/app/features/lib/components/simple-alert/simple-alert.component.html`,`<ngb-alert type="primary" dismissible="false" animation="false">
    <strong>Heads up!</strong> This is a simple alert rendered with NgbJS.
</ngb-alert>
`),e.put(`src/app/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component.html`,`<div class="d-flex flex-wrap align-items-center gap-2 mb-3">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.start()" ng-disabled="example.running">Start</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.stop()" ng-disabled="!example.running">Stop</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.toggleFinish()" ng-disabled="!example.running">
        {{ example.observingFinish ? 'Unobserve' : 'Observe' }} finish
    </button>
    <span class="small text-body-secondary ms-sm-auto">
        Active: <code>{{ example.scrollSpy.active || 'none' }}</code>
    </span>
</div>

<div class="row g-3">
    <div class="col-md-4">
        <div class="nav nav-pills flex-column">
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-introduction')">Introduction</button>
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-options')">Options</button>
            <button type="button" class="nav-link text-start" ng-click="example.scrollSpy.scrollTo('service-finish')">Finish</button>
        </div>
    </div>

    <div class="col-md-8">
        <div class="bg-body-tertiary border rounded p-3 overflow-y-auto" style="height: 17rem" data-service-scrollspy>
            <section id="service-introduction" class="pb-5">
                <h3 class="h5">Introduction</h3>
                <p>The service can observe ordinary DOM elements without scrollspy directives.</p>
            </section>
            <section id="service-options" class="pb-5">
                <h3 class="h5">Options</h3>
                <p>Call <code>start()</code> with a root element and the fragment ids to observe.</p>
            </section>
            <section id="service-finish" class="pb-5 mb-5">
                <h3 class="h5">Finish</h3>
                <p class="mb-5"><code>observe()</code>, <code>unobserve()</code>, <code>scrollTo()</code> and <code>stop()</code> remain available programmatically.</p>
            </section>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/scrollspy-menu-items/scrollspy-menu-items.component.html`,`<div class="row g-3">
    <div class="col-md-8 order-2">
        <div
            class="bg-body-tertiary border rounded p-3"
            style="height: 16rem"
            ngb-scroll-spy
            root-margin="0px 0px -45%"
            ng-ref="example.spy"
            ng-ref-read="ngbScrollSpy">
            <section class="pb-5" ngb-scroll-spy-fragment="menu-items-first">
                <h3 class="h5">First section</h3>
                <p>Clicking an item asks the referenced scrollspy to move to its matching fragment.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="menu-items-second">
                <h3 class="h5">Second section</h3>
                <p>The active item receives Bootstrap's <code>active</code> class automatically.</p>
            </section>
            <section class="pb-5 mb-5" ngb-scroll-spy-fragment="menu-items-third">
                <h3 class="h5">Third section</h3>
                <p class="mb-5">Items can be buttons or links; their fragment identifier is the important part.</p>
            </section>
        </div>
    </div>

    <div class="col-md-4 order-1">
        <div class="list-group" ngb-scroll-spy-menu="example.spy">
            <button type="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-first">First</button>
            <button type="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-second">Second</button>
            <a role="button" class="list-group-item list-group-item-action" ngb-scroll-spy-item="menu-items-third">Third</a>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/seconds-timepicker/seconds-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" seconds="example.seconds"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.seconds ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.seconds = !example.seconds">
        Seconds {{ example.seconds ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/rating-global/rating-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Customized defaults</p><p class="small text-body-secondary mb-0">Five stars, read-only behavior and no keyboard tab stop.</p></div>
</div>

<ngb-rating rate="3"></ngb-rating>
`),e.put(`src/app/features/lib/components/selecting-nav/selecting-nav.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-first')">
        Select first
    </button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-second')">
        Select second
    </button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.select('selecting-third')">
        Select third
    </button>
</div>

<ul ngb-nav ng-ref="nav" active-id="example.activeId" class="nav-tabs">
    <li ngb-nav-item="selecting-first">
        <button type="button" ngb-nav-link>First</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">First tab selected.</p></ng-template>
    </li>
    <li ngb-nav-item="selecting-second">
        <button type="button" ngb-nav-link>Second</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Second tab selected.</p></ng-template>
    </li>
    <li ngb-nav-item="selecting-third">
        <button type="button" ngb-nav-link>Third</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Third tab selected.</p></ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
<p class="small text-body-secondary mt-2 mb-0">Active id: {{ example.activeId }}</p>
`),e.put(`src/app/features/lib/components/rating-form/rating-form.component.html`,`<form name="example.form" novalidate>
    <ngb-rating rate="example.rating" rate-change="example.setRating($event)" ng-disabled="example.disabled"></ngb-rating>
    <input class="visually-hidden" type="number" name="rating" ng-model="example.rating" min="1" required ng-disabled="example.disabled" tabindex="-1" aria-hidden="true">

    <p class="small mt-2 mb-3" ng-class="example.form.rating.$valid ? 'text-success' : 'text-danger'">
        {{ example.form.rating.$valid ? 'Thanks!' : 'Please rate us' }}
    </p>

    <p>Model: <strong>{{ example.rating === null ? 'null' : example.rating }}</strong></p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-sm" ng-class="example.disabled ? 'btn-outline-danger' : 'btn-outline-success'" ng-click="example.disabled = !example.disabled">
            {{ example.disabled ? 'Control disabled' : 'Control enabled' }}
        </button>
        <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.clear()">Clear</button>
    </div>
</form>
`),e.put(`src/app/features/lib/components/rating-events/rating-events.component.html`,`<ngb-rating rate="example.selected" rate-change="example.setSelected($event)" hover="example.setHovered($event)" leave="example.setHovered(0)" readonly="example.readonly"></ngb-rating>
<hr>
<dl class="row mb-3">
    <dt class="col-auto">Selected</dt><dd class="col mb-0">{{ example.selected }}</dd>
    <dt class="col-auto">Hovered</dt><dd class="col mb-0">{{ example.hovered }}</dd>
</dl>
<button type="button" class="btn btn-sm" ng-class="example.readonly ? 'btn-outline-danger' : 'btn-outline-success'" ng-click="example.readonly = !example.readonly">
    {{ example.readonly ? 'Read-only' : 'Editable' }}
</button>
`),e.put(`src/app/features/lib/components/range-datepicker/range-datepicker.component.html`,`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="overflow-auto pb-2">
    <ngb-datepicker display-months="2" outside-days="hidden" day-template="example.day" date-select="example.select($event)"></ngb-datepicker>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`),e.put(`src/app/features/lib/components/rating-decimal/rating-decimal.component.html`,`<ng-template ng-ref="example.heartTemplate" let-fill="fill">
    <span class="rating-demo-heart">
        <i class="bi bi-heart-fill" aria-hidden="true"></i>
        <span class="rating-demo-heart-fill" ng-style="{ width: fill + '%' }"><i class="bi bi-heart-fill" aria-hidden="true"></i></span>
    </span>
</ng-template>

<ngb-rating rate="example.rating" max="5" readonly="true" star-template="example.heartTemplate" aria-value-text="example.ariaValueText"></ngb-rating>
<hr>
<p>Rate: <strong>{{ example.rating }}</strong></p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.rating = 1.35">1.35</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.rating = 4.72">4.72</button>
</div>
`),e.put(`src/app/features/lib/components/progressbar-global/progressbar-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Primary, striped and animated; maximum 200, visible percentage and 1.5rem height.</p></div>
</div>

<ngb-progressbar value="135"></ngb-progressbar>
`),e.put(`src/app/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html`,`<ngb-progressbar-stacked>
    <ngb-progressbar type="danger" value="20">20%</ngb-progressbar>
    <ngb-progressbar type="warning" value="35">35%</ngb-progressbar>
    <ngb-progressbar type="success" value="45">45%</ngb-progressbar>
</ngb-progressbar-stacked>

<p class="small text-body-secondary mt-3 mb-0">The three segments share one Bootstrap stacked progress container.</p>
`),e.put(`src/app/features/lib/components/progress-height/progress-height.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25">Default</ngb-progressbar>
    <ngb-progressbar type="info" value="50" height="10px">10px</ngb-progressbar>
    <ngb-progressbar type="warning" value="75" height="1.5rem">1.5rem</ngb-progressbar>
    <ngb-progressbar type="danger" value="100" height="2rem">2rem</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/rating-custom-template/rating-custom-template.component.html`,`<p>Bootstrap Icons are rendered through a child <code>ng-template</code>.</p>
<ngb-rating rate="example.rating" rate-change="example.setRating($event)">
    <ng-template let-fill="fill" let-index="index">
        <i class="bi rating-demo-star" ng-class="[fill === 100 ? 'bi-star-fill filled' : 'bi-star', { low: index < 3 }]" aria-hidden="true"></i>
    </ng-template>
</ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`),e.put(`src/app/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.html`,`<p>Show the toast and keep the pointer over it to pause autohide.</p>

<button type="button" class="btn btn-primary mb-3" ng-click="example.show()">Show toast</button>

<div class="toast-container position-static">
    <ngb-toast
        ng-if="example.visible"
        header="Autohide can be paused"
        delay="5000"
        autohide="example.autohide"
        hidden="example.hide()"
        ng-mouseenter="example.autohide = false"
        ng-mouseleave="example.autohide = true"
        ng-class="{ 'border-warning': !example.autohide }">
        {{ example.autohide ? 'Hover over me before five seconds pass.' : 'Paused. I will remain visible until you leave.' }}
    </ngb-toast>
</div>
`),e.put(`src/app/features/lib/components/popup-datepicker/popup-datepicker.component.html`,`<label class="form-label" for="popup-datepicker-input">Choose a date</label>
<div class="input-group" style="max-width: 22rem">
    <input id="popup-datepicker-input" class="form-control" ng-model="example.date" ngb-datepicker ng-focus="$datepicker.open()">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar">
        <i class="bi bi-calendar3" aria-hidden="true"></i>
    </button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/popover-triggers/popover-triggers.component.html`,`<p class="mb-3">Custom events can be paired as <code>mouseenter:mouseleave</code>.</p>
<button type="button" class="btn btn-outline-secondary mb-4" ngb-popover="'Shown while the pointer is over the trigger'" popover-title="'Hover trigger'" triggers="'mouseenter:mouseleave'">
    Hover over me
</button>

<p class="mb-3">A manual trigger delegates opening and closing to application code.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ngb-popover="'Manually controlled content'" popover-title="'Manual popover'" triggers="'manual'" auto-close="false" ng-ref="example.manual" ng-ref-read="ngbPopover" ng-click="example.manual.open()">
        Open popover
    </button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.manual.close()">Close popover</button>
</div>
`),e.put(`src/app/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.html`,`<ng-template ng-ref="example.day" let-date let-focused="focused">
    <span class="docs-popup-range-day" ng-class="{ focused: focused, range: example.isRange(date), faded: example.isHovered(date) || example.isInside(date) }" ng-mouseenter="example.hoveredDate = date" ng-mouseleave="example.hoveredDate = null">{{ date.day }}</span>
</ng-template>
<div class="input-group" style="max-width: 24rem">
    <input class="form-control" ng-model="example.model" ngb-datepicker display-months="2" outside-days="hidden" auto-close="'outside'" day-template="example.day" date-select="example.select($event)" aria-label="Date range">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar-range" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">From <code>{{ example.fromDate | json }}</code> to <code>{{ example.toDate | json }}</code></p>
`),e.put(`src/app/features/lib/components/popover-placements/popover-placements.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Popover content'" popover-title="'Popover on top'">Top</button>
    <button type="button" class="btn btn-outline-secondary" placement="'end'" ngb-popover="'Popover content'" popover-title="'Popover on right'">Right</button>
    <button type="button" class="btn btn-outline-secondary" placement="'bottom'" ngb-popover="'Popover content'" popover-title="'Popover on bottom'">Bottom</button>
    <button type="button" class="btn btn-outline-secondary" placement="'start'" ngb-popover="'Popover content'" popover-title="'Popover on left'">Left</button>
</div>
`),e.put(`src/app/features/lib/components/popover-manual-control/popover-manual-control.component.html`,`<button type="button" class="btn btn-primary mb-3" ngb-popover="'This target is controlled by the buttons below'" popover-title="'External controls'" triggers="'manual'" auto-close="false" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Popover target
</button>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.open()">Open</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.close()">Close</button>
    <button type="button" class="btn btn-sm btn-outline-primary" ng-click="example.popover.toggle()">Toggle</button>
</div>
`),e.put(`src/app/features/lib/components/popover-template/popover-template.component.html`,`<ng-template ng-ref="example.titleTemplate">
    <span class="d-flex align-items-center gap-2"><i class="bi bi-code-slash" aria-hidden="true"></i><strong>Template content</strong></span>
</ng-template>
<ng-template ng-ref="example.contentTemplate">
    <p class="mb-2">Hello, <strong>{{ example.name }}</strong>!</p>
    <button class="btn btn-sm btn-primary" type="button" ng-click="example.name = 'AngularJS'">Update binding</button>
</ng-template>

<button type="button" class="btn btn-outline-primary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate">
    HTML and bindings
</button>
`),e.put(`src/app/features/lib/components/popover-events/popover-events.component.html`,`<button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Watch the event log below.'" popover-title="'Visibility events'" shown="example.record('shown')" hidden="example.record('hidden')" ng-ref="example.popover" ng-ref-read="ngbPopover">
    Toggle popover
</button>

<div class="mt-4">
    <p class="mb-2">Current state: <code>{{ example.popover.isOpen() ? 'open' : 'closed' }}</code></p>
    <ul class="list-group list-group-flush" ng-if="example.events.length">
        <li class="list-group-item px-0 py-2" ng-repeat="event in example.events track by $index"><code>{{ event.name }}</code> at {{ event.time | date:'mediumTime' }}</li>
    </ul>
    <p class="text-body-secondary mb-0" ng-if="!example.events.length">No events recorded yet.</p>
</div>
`),e.put(`src/app/features/lib/components/popover-delays/popover-delays.component.html`,`<p>Move the pointer into the popover before its close delay expires to keep it open.</p>
<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after 300 ms and closes after 500 ms.'" triggers="'mouseenter:mouseleave'" open-delay="300" close-delay="500">300 / 500 ms</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="'Opens after one second and closes after two.'" triggers="'mouseenter:mouseleave'" open-delay="1000" close-delay="2000">1 / 2 seconds</button>
</div>
`),e.put(`src/app/features/lib/components/popover-global/popover-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Hover trigger, end placement, body container and a 300 ms opening delay.</p></div>
</div>
<button type="button" class="btn btn-outline-primary" ngb-popover="'This instance reads every option from NgbPopoverConfig.'" popover-title="'Configured globally'">Hover over me</button>
`),e.put(`src/app/features/lib/components/popover-custom-target/popover-custom-target.component.html`,`<div class="d-flex flex-wrap align-items-baseline gap-2">
    <span>You can click</span>
    <button class="btn btn-outline-secondary" type="button" ngb-popover="'The button triggered me, but this text positioned me.'" popover-title="'Custom target'" position-target="'#popover-position-target'">this button</button>
    <span>but the popover appears over <strong id="popover-position-target" class="text-primary">this target</strong>.</span>
</div>
`),e.put(`src/app/features/lib/components/popover-custom-class/popover-custom-class.component.html`,`<button type="button" class="btn btn-outline-primary" ngb-popover="'A small custom skin layered on top of Bootstrap variables.'" popover-title="'NgbJS popover'" popover-class="docs-popover-custom">
    Popover with custom class
</button>
`),e.put(`src/app/features/lib/components/popover-context/popover-context.component.html`,`<ng-template ng-ref="example.contentTemplate" let-greeting="greeting">{{ greeting }}, <strong>{{ example.name }}</strong>!</ng-template>
<ng-template ng-ref="example.titleTemplate" let-language="language">Greeting in {{ language }}</ng-template>

<p>You can pass context when manually opening a popover.</p>
<div class="d-flex flex-wrap gap-2 mb-4">
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.french" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.french, 'Bonjour', 'French')">French</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.german" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.german, 'Guten Tag', 'German')">German</button>
    <button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" triggers="'manual'" ng-ref="example.english" ng-ref-read="ngbPopover" ng-click="example.toggleWithGreeting(example.english, 'Hello', 'English')">English</button>
</div>

<p>Alternatively, provide a default context through <code>popover-context</code>.</p>
<button type="button" class="btn btn-outline-secondary" ngb-popover="example.contentTemplate" popover-title="example.titleTemplate" popover-context="{ language: '中文', greeting: '你好' }">Chinese</button>
`),e.put(`src/app/features/lib/components/popover-body/popover-body.component.html`,`<div class="overflow-hidden border rounded p-4" style="max-width: 24rem">
    <p class="small text-body-secondary">This container clips overflowing descendants.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" placement="'top'" ngb-popover="'Inserted next to the trigger.'">Default</button>
        <button type="button" class="btn btn-outline-primary" placement="'top'" ngb-popover="'Appended directly to document.body.'" container="'body'">Append to body</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/popover-autoclose/popover-autoclose.component.html`,`<p>Every popover also closes with <kbd>Esc</kbd>.</p>
<div class="vstack gap-3 align-items-start">
    <button type="button" class="btn btn-outline-secondary" auto-close="'inside'" ngb-popover="'Click this content or press Escape'" popover-title="'Inside clicks'">Close on inside click</button>
    <button type="button" class="btn btn-outline-secondary" auto-close="'outside'" ngb-popover="'Click elsewhere or press Escape'" popover-title="'Outside clicks'">Close on outside click</button>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" auto-close="true" ngb-popover="'Click anywhere or press Escape'" popover-title="'All clicks'" ng-ref="example.popover" ng-ref-read="ngbPopover">Close on every click</button>
        <button type="button" class="btn btn-outline-secondary" ng-click="example.popover.toggle()">External toggle</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/pagination-alignment/pagination-alignment.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small text-body-secondary mb-2">Start</p>
        <ngb-pagination class="d-flex justify-content-start" collection-size="50" page="example.startPage" page-change="example.selectStartPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary text-center mb-2">Center</p>
        <ngb-pagination class="d-flex justify-content-center" collection-size="50" page="example.centerPage" page-change="example.selectCenterPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary text-end mb-2">End</p>
        <ngb-pagination class="d-flex justify-content-end" collection-size="50" page="example.endPage" page-change="example.selectEndPage($event)"></ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/pagination-global/pagination-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Pagination is small, rotating, limited to five pages and uses boundary links without direction links.
        </p>
    </div>
</div>

<ngb-pagination
    collection-size="200"
    page="example.page"
    page-change="example.selectPage($event)">
</ngb-pagination>
`),e.put(`src/app/features/lib/components/one-panel-accordion/one-panel-accordion.component.html`,`<div ngb-accordion animation="true" close-others="true" destroy-on-hide="true">
    <div ngb-accordion-item="'one-panel-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Opening another panel automatically collapses this one.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'one-panel-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0"><code>close-others</code> keeps only one item expanded.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'one-panel-third'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Third panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The behavior is coordinated by the parent accordion.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component.html`,`<div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5" id="offcanvas-focus-title">Focus management</h2>
</div>

<div class="offcanvas-body">
    <div class="mb-3">
        <label class="form-label" for="offcanvas-first-focusable">First focusable element</label>
        <input id="offcanvas-first-focusable" type="text" class="form-control" placeholder="Focused by default">
    </div>

    <div class="mb-3" ng-if="$.autofocus">
        <label class="form-label" for="offcanvas-custom-autofocus">Custom autofocus target</label>
        <input
            id="offcanvas-custom-autofocus"
            type="text"
            class="form-control"
            placeholder="Focused through ngbAutofocus"
            ngbAutofocus>
    </div>

    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveOffcanvas.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-focus/offcanvas-focus.component.html`,`<p class="text-body-secondary">
    The first focusable element receives focus by default. Add <code>ngbAutofocus</code> to choose another target.
</p>

<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-primary" ng-click="example.openDefaultFocus()">Focus first element</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomFocus()">Use ngbAutofocus</button>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-global/offcanvas-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The panel opens from the end, allows body scrolling, uses a static backdrop and ignores Escape.
            This documentation example restores the shared defaults immediately after opening.
        </p>
    </div>
</div>

<button type="button" class="btn btn-primary" ng-click="example.open()">Open globally configured offcanvas</button>
`),e.put(`src/app/features/lib/components/offcanvas-options/offcanvas-options.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomPanel()">Custom panel class</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStaticBackdrop()">Static backdrop</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStart()">Start</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openEnd()">End</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openTop()">Top</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openBottom()">Bottom</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openScrollableBody()">Body scrolling</button>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component.html`,`<div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5">Component offcanvas</h2>
    <button
        type="button"
        class="btn-close"
        aria-label="Close"
        ng-click="$.ngbActiveOffcanvas.dismiss('header close')">
    </button>
</div>

<div class="offcanvas-body">
    <p>This panel receives a registered component as its content.</p>
    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-secondary" ng-click="$.ngbActiveOffcanvas.dismiss('cancel')">
            Cancel
        </button>
        <button type="button" class="btn btn-primary" ng-click="$.ngbActiveOffcanvas.close('accepted')">
            Continue
        </button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-default/offcanvas-default.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default offcanvas</button>

<ng-template ng-ref="content" let-close="close" let-dismiss="dismiss">
    <div class="offcanvas-header">
        <h2 class="offcanvas-title fs-5">Default offcanvas</h2>
        <button type="button" class="btn-close" aria-label="Close" ng-click="dismiss('header close')"></button>
    </div>
    <div class="offcanvas-body">
        <p>This offcanvas uses the global defaults without passing local options.</p>
        <div class="d-flex flex-wrap gap-2">
            <button type="button" class="btn btn-outline-secondary" ng-click="dismiss('cancel')">Cancel</button>
            <button type="button" class="btn btn-primary" ng-click="close('accepted')">Continue</button>
        </div>
    </div>
</ng-template>
`),e.put(`src/app/features/lib/components/pagination-size/pagination-size.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small text-body-secondary mb-2">Small</p>
        <ngb-pagination collection-size="50" page="example.smallPage" page-change="example.selectSmallPage($event)" size="'sm'"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary mb-2">Default</p>
        <ngb-pagination collection-size="50" page="example.defaultPage" page-change="example.selectDefaultPage($event)"></ngb-pagination>
    </div>
    <div>
        <p class="small text-body-secondary mb-2">Large</p>
        <ngb-pagination collection-size="50" page="example.largePage" page-change="example.selectLargePage($event)" size="'lg'"></ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component offcanvas</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`),e.put(`src/app/features/lib/components/nested-scrollspy/nested-scrollspy.component.html`,`<div class="row g-3">
    <div class="col-md-8 order-2">
        <div
            class="bg-body-tertiary border rounded p-3"
            style="height: 18rem"
            ngb-scroll-spy
            root-margin="0px 0px -45%"
            ng-ref="example.spy"
            ng-ref-read="ngbScrollSpy">
            <section class="pb-4" ngb-scroll-spy-fragment="nested-guide">
                <h3 class="h4">Guide</h3>
                <p>A parent item can represent a complete group of related sections.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="nested-install">
                <h4 class="h5">Install</h4>
                <p>Child items use <code>parent</code> to activate both their own entry and the group entry.</p>
            </section>
            <section class="pb-5" ngb-scroll-spy-fragment="nested-configure">
                <h4 class="h5">Configure</h4>
                <p>The menu directive coordinates the active state across every descendant item.</p>
            </section>
            <section class="pb-5 mb-5" ngb-scroll-spy-fragment="nested-reference">
                <h3 class="h4">Reference</h3>
                <p class="mb-5">Top-level entries continue to work alongside nested groups.</p>
            </section>
        </div>
    </div>

    <div class="col-md-4 order-1">
        <nav class="nav nav-pills flex-column" ngb-scroll-spy-menu="example.spy" aria-label="Nested example navigation">
            <button type="button" class="nav-link text-start" ngb-scroll-spy-item="nested-guide">Guide</button>
            <nav class="nav nav-pills flex-column ms-3">
                <button type="button" class="nav-link text-start my-1" ngb-scroll-spy-item="nested-install" parent="nested-guide">Install</button>
                <button type="button" class="nav-link text-start my-1" ngb-scroll-spy-item="nested-configure" parent="nested-guide">Configure</button>
            </nav>
            <button type="button" class="nav-link text-start" ngb-scroll-spy-item="nested-reference">Reference</button>
        </nav>
    </div>
</div>
`),e.put(`src/app/features/lib/components/navbar-scrollspy/navbar-scrollspy.component.html`,`<div class="d-flex flex-column">
    <div
        class="bg-body-tertiary border rounded p-3 order-2"
        style="height: 15rem"
        ngb-scroll-spy
        root-margin="0px 0px -45%"
        ng-ref="example.spy"
        ng-ref-read="ngbScrollSpy">
        <section class="pb-5" ngb-scroll-spy-fragment="navbar-overview">
            <h3 class="h5">Overview</h3>
            <p>The menu can live outside the observed container when it receives an explicit scrollspy reference.</p>
        </section>
        <section class="pb-5" ngb-scroll-spy-fragment="navbar-features">
            <h3 class="h5">Features</h3>
            <p>Bootstrap navbar and nav utilities provide the layout while ngb-js manages navigation state.</p>
        </section>
        <section class="pb-5 mb-5" ngb-scroll-spy-fragment="navbar-summary">
            <h3 class="h5">Summary</h3>
            <p class="mb-5">Selecting a navbar item scrolls this container without moving the surrounding page.</p>
        </section>
    </div>

    <nav class="navbar bg-body-tertiary border rounded px-3 mb-3 order-1">
        <span class="navbar-brand mb-0 h1">Docs</span>
        <div class="nav nav-pills" ngb-scroll-spy-menu="example.spy">
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-overview">Overview</button>
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-features">Features</button>
            <button type="button" class="nav-link" ngb-scroll-spy-item="navbar-summary">Summary</button>
        </div>
    </nav>
</div>
`),e.put(`src/app/features/lib/components/navbar-collapse/navbar-collapse.component.html`,`<p class="text-body-secondary mb-3">
    Resize the viewport to see the navigation switch between its expanded and collapsed layouts.
</p>

<nav class="navbar navbar-expand-lg bg-body-tertiary border rounded">
    <div class="container-fluid">
        <span class="navbar-brand mb-0">NgbJS</span>

        <button
            type="button"
            class="navbar-toggler"
            ng-click="example.toggleMenu()"
            ng-attr-aria-expanded="{{ !example.menuCollapsed }}"
            aria-controls="collapse-navbar-menu"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div
            id="collapse-navbar-menu"
            class="navbar-collapse"
            ngb-collapse="example.menuCollapsed">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <button type="button" class="nav-link active" ng-click="example.closeMenu()">Features</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" ng-click="example.closeMenu()">Examples</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" ng-click="example.closeMenu()">About</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
`),e.put(`src/app/features/lib/components/nav-global/nav-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The nav is vertical, keeps hidden content and selects tabs while navigating with the arrow keys.
        </p>
    </div>
</div>

<div class="d-flex align-items-start gap-3">
    <div
        ngb-nav
        ng-ref="example.nav"
        ng-ref-read="ngbNav"
        active-id="example.activeId"
        class="nav-pills flex-column flex-shrink-0">
        <div ngb-nav-item="global-account">
            <button type="button" ngb-nav-link>Account</button>
            <ng-template ngb-nav-content><p class="mb-0">Global account settings.</p></ng-template>
        </div>
        <div ngb-nav-item="global-team">
            <button type="button" ngb-nav-link>Team</button>
            <ng-template ngb-nav-content><p class="mb-0">Global team settings.</p></ng-template>
        </div>
        <div ngb-nav-item="global-billing">
            <button type="button" ngb-nav-link>Billing</button>
            <ng-template ngb-nav-content><p class="mb-0">Global billing settings.</p></ng-template>
        </div>
    </div>

    <div class="border rounded p-3 flex-grow-1" ngb-nav-outlet="example.nav"></div>
</div>
`),e.put(`src/app/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component.html`,`<div class="overflow-auto pb-2">
    <ngb-datepicker ng-model="example.date" display-months="2" outside-days="hidden"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/non-editable-typeahead/non-editable-typeahead.component.html`,`<p>Manual text is not accepted; the model changes only after selecting a suggestion.</p>
<label class="form-label" for="non-editable-typeahead">Search for a state</label>
<input id="non-editable-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" editable="false" placeholder="Type at least two characters">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/modal-updatable-content/modal-updatable-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5" id="updatable-modal-title">Updatable options</h2>
    <button type="button" class="btn-close" aria-label="Close" ng-click="$.ngbActiveModal.dismiss('close')"></button>
</div>

<div class="modal-body">
    <p id="updatable-modal-description">
        Change the window, dialog, backdrop and accessibility options while this modal remains open.
    </p>

    <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleAriaReferences()">
            ARIA references: {{ $.ariaReferences ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleCentered()">
            Centered: {{ $.centered ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleFullscreen()">
            Fullscreen: {{ $.fullscreen ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleBackdropClass()">
            Backdrop class: {{ $.customBackdrop ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.cycleSize()">
            Size: {{ $.size }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleWindowClass()">
            Window class: {{ $.customWindow ? 'on' : 'off' }}
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$.toggleDialogClass()">
            Dialog class: {{ $.customDialog ? 'on' : 'off' }}
        </button>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/modal-updatable/modal-updatable.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open updatable modal</button>
`),e.put(`src/app/features/lib/components/modal-stacked-content/modal-stacked-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5">Stacked modal {{ $.level }}</h2>
    <button type="button" class="btn-close" aria-label="Close" ng-click="$.ngbActiveModal.dismiss('close')"></button>
</div>

<div class="modal-body">
    <p class="mb-0">This is modal layer {{ $.level }} of 3. Close it to return to the previous layer.</p>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" ng-click="$.dismissAll()">Dismiss all</button>
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Close this modal</button>
</div>
`),e.put(`src/app/features/lib/components/modal-focus-content/modal-focus-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5" id="modal-focus-title">Focus management</h2>
</div>

<div class="modal-body">
    <div class="mb-3">
        <label class="form-label" for="modal-first-focusable">First focusable element</label>
        <input id="modal-first-focusable" type="text" class="form-control" placeholder="Focused by default">
    </div>

    <div ng-if="$.autofocus">
        <label class="form-label" for="modal-custom-autofocus">Custom autofocus target</label>
        <input
            id="modal-custom-autofocus"
            type="text"
            class="form-control"
            placeholder="Focused through ngbAutofocus"
            ngbAutofocus>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close()">Done</button>
</div>
`),e.put(`src/app/features/lib/components/modal-stacked/modal-stacked.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.openStack()">Open three modals</button>
`),e.put(`src/app/features/lib/components/modal-options/modal-options.component.html`,`<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomWindow()">Custom class</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openStaticBackdrop()">Static backdrop</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openSmall()">Small</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openLarge()">Large</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openExtraLarge()">Extra large</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openFullscreen()">Fullscreen</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCentered()">Vertically centered</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openScrollable()">Scrollable content</button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomDialog()">Dialog custom class</button>
</div>
`),e.put(`src/app/features/lib/components/modal-global/modal-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Modals are large, vertically centered, use a static backdrop and ignore the Escape key.
            This documentation example restores the shared defaults immediately after opening.
        </p>
    </div>
</div>

<button type="button" class="btn btn-primary" ng-click="example.open()">Open globally configured modal</button>
`),e.put(`src/app/features/lib/components/modal-focus/modal-focus.component.html`,`<p class="text-body-secondary">
    The first focusable element receives focus by default. Add <code>ngbAutofocus</code> to choose another target.
</p>

<div class="d-flex flex-wrap gap-2">
    <button type="button" class="btn btn-primary" ng-click="example.openDefaultFocus()">
        Focus first element
    </button>
    <button type="button" class="btn btn-outline-primary" ng-click="example.openCustomFocus()">
        Use ngbAutofocus
    </button>
</div>
`),e.put(`src/app/features/lib/components/modal-demo-content/modal-demo-content.component.html`,`<div class="modal-header">
    <h2 class="modal-title fs-5">{{ $.title }}</h2>
    <button
        type="button"
        class="btn-close"
        aria-label="Close"
        ng-click="$.ngbActiveModal.dismiss('header close')">
    </button>
</div>

<div class="modal-body">
    <p ng-class="{ 'mb-0': !$.longContent }">{{ $.description }}</p>

    <div class="list-group" ng-if="$.longContent">
        <div class="list-group-item" ng-repeat="item in $.items track by $index">{{ item }}</div>
    </div>
</div>

<div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" ng-click="$.ngbActiveModal.dismiss('cancel')">
        Cancel
    </button>
    <button type="button" class="btn btn-primary" ng-click="$.ngbActiveModal.close('accepted')">
        Continue
    </button>
</div>
`),e.put(`src/app/features/lib/components/modal-default/modal-default.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open default modal</button>

<ng-template ng-ref="content" let-close="close" let-dismiss="dismiss">
    <div class="modal-header">
        <h2 class="modal-title fs-5">Default modal</h2>
        <button type="button" class="btn-close" aria-label="Close" ng-click="dismiss('header close')"></button>
    </div>
    <div class="modal-body">
        <p class="mb-0">This modal uses the global defaults without passing local options.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" ng-click="dismiss('cancel')">Cancel</button>
        <button type="button" class="btn btn-primary" ng-click="close('accepted')">Continue</button>
    </div>
</ng-template>
`),e.put(`src/app/features/lib/components/keep-content-nav/keep-content-nav.component.html`,`<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    destroy-on-hide="false"
    class="nav-tabs">
    <li ngb-nav-item="keep-editor">
        <button type="button" ngb-nav-link>Editor</button>
        <ng-template ngb-nav-content>
            <div class="pt-3">
                <label class="form-label" for="keep-content-draft">Draft</label>
                <input id="keep-content-draft" type="text" class="form-control" ng-model="example.draft">
            </div>
        </ng-template>
    </li>
    <li ngb-nav-item="keep-preview">
        <button type="button" ngb-nav-link>Preview</button>
        <ng-template ngb-nav-content>
            <div class="pt-3">
                <p class="small text-body-secondary mb-1">Current draft</p>
                <p class="mb-0">{{ example.draft }}</p>
            </div>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/modal-component-content/modal-component-content.component.html`,`<button type="button" class="btn btn-primary" ng-click="example.open()">Open component modal</button>
<p class="small text-body-secondary mt-2 mb-0">{{ example.lastResult }}</p>
`),e.put(`src/app/features/lib/components/manual-dropdown/manual-dropdown.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.open()">Open</button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.close()">Close</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle()">Toggle</button>
</div>

<div
    ngb-dropdown
    ng-ref="dropdown"
    open="example.opened"
    open-change="example.opened = $event">
    <button type="button" class="btn btn-outline-dark" ngb-dropdown-anchor>
        Manually controlled menu
    </button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>First action</button>
        <button type="button" ngb-dropdown-item>Second action</button>
    </div>
</div>

<p class="small text-body-secondary mt-2 mb-0">
    Current state: {{ example.opened ? 'open' : 'closed' }}
</p>
`),e.put(`src/app/features/lib/components/meridian-timepicker/meridian-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time" meridian="example.meridian"></ngb-timepicker>
    <button type="button" class="btn btn-sm" ng-class="example.meridian ? 'btn-outline-success' : 'btn-outline-secondary'" ng-click="example.meridian = !example.meridian">
        Meridian {{ example.meridian ? 'on' : 'off' }}
    </button>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/inline-toast/inline-toast.component.html`,`<div class="toast-container position-static d-flex flex-column gap-3">
    <div>
        <h3 class="h6">Body only</h3>
        <ngb-toast autohide="false">I am a simple static toast.</ngb-toast>
    </div>

    <div>
        <h3 class="h6">With a text header</h3>
        <ngb-toast ng-if="example.showHeaderToast" header="Hello" autohide="false" hidden="example.showHeaderToast = false">
            I am a simple static toast with a header.
        </ngb-toast>
        <button ng-if="!example.showHeaderToast" type="button" class="btn btn-sm btn-outline-primary" ng-click="example.showHeaderToast = true">
            Show toast again
        </button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/formatted-typeahead/formatted-typeahead.component.html`,`<label class="form-label" for="formatted-typeahead">Search for a state</label>
<input id="formatted-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" result-formatter="example.formatter" placeholder="Results are formatted in uppercase">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/horizontal-collapse/horizontal-collapse.component.html`,`<button
    type="button"
    class="btn btn-primary mb-3"
    ng-click="example.toggle()"
    ng-attr-aria-expanded="{{ !example.collapsed }}"
    aria-controls="horizontal-collapse-panel">
    Toggle width
</button>

<div class="d-flex">
    <div
        id="horizontal-collapse-panel"
        ngb-collapse="example.collapsed"
        horizontal="true">
        <div class="card card-body text-nowrap">
            This content collapses horizontally.
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/exact-typeahead/exact-typeahead.component.html`,`<label class="form-label" for="exact-typeahead">Search for a state</label>
<input id="exact-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" input-formatter="example.formatter" result-formatter="example.formatter" select-on-exact="true" placeholder="Try California">
<pre class="mt-3 mb-0">Model: {{ example.model | json }}</pre>
`),e.put(`src/app/features/lib/components/focus-typeahead/focus-typeahead.component.html`,`<label class="form-label" for="focus-typeahead">Search for a state</label>
<input id="focus-typeahead" type="text" class="form-control" ng-model="example.model" ngb-typeahead="example.search" ng-focus="example.focus$.next($event.target.value)" placeholder="Focus to see suggestions">
<p class="small text-body-secondary mt-2 mb-0">Model: <strong>{{ example.model || 'empty' }}</strong></p>
`),e.put(`src/app/features/lib/components/dynamic-nav/dynamic-nav.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.add()">Add tab</button>
    <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        ng-click="example.removeActive()"
        ng-disabled="example.items.length === 1">
        Remove active tab
    </button>
</div>

<ul
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <li ng-repeat="item in example.items track by item.id" ngb-nav-item="{{ item.id }}">
        <button type="button" ngb-nav-link>{{ item.title }}</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Dynamic content for {{ item.title }}.</p>
        </ng-template>
    </li>
</ul>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/dropdown-global/dropdown-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The menu prefers the top placement, uses the body container and closes only after an outside click.
        </p>
    </div>
</div>

<div ngb-dropdown>
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Globally configured</button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>This click keeps the menu open</button>
        <button type="button" ngb-dropdown-item>So does this one</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-navbar/dropdown-navbar.component.html`,`<nav class="navbar bg-body-tertiary border rounded px-3">
    <span class="navbar-brand mb-0">Workspace</span>

    <div class="ms-auto" ngb-dropdown display="'dynamic'" placement="'bottom-end'">
        <button type="button" class="btn btn-outline-primary" ngb-dropdown-toggle>Account</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Profile</button>
            <button type="button" ngb-dropdown-item>Preferences</button>
            <div class="dropdown-divider"></div>
            <button type="button" ngb-dropdown-item>Sign out</button>
        </div>
    </div>
</nav>
`),e.put(`src/app/features/lib/components/disabled-pagination/disabled-pagination.component.html`,`<div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" role="switch" id="pagination-disabled" ng-model="example.disabled">
    <label class="form-check-label" for="pagination-disabled">Disabled</label>
</div>

<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)"
    ng-disabled="example.disabled">
</ngb-pagination>
`),e.put(`src/app/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.html`,`<div class="form-check form-switch mb-3">
    <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="dropdown-restricted-items"
        ng-model="example.restricted">
    <label class="form-check-label" for="dropdown-restricted-items">Disable restricted actions</label>
</div>

<div ngb-dropdown>
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Project actions</button>
    <div ngb-dropdown-menu>
        <button type="button" ngb-dropdown-item>Open project</button>
        <button type="button" ngb-dropdown-item ng-disabled="example.restricted">Archive project</button>
        <button type="button" ngb-dropdown-item ng-disabled="example.restricted">Delete project</button>
        <div class="dropdown-divider"></div>
        <button type="button" ngb-dropdown-item ng-disabled="true">Unavailable action</button>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-form/dropdown-form.component.html`,`<div ngb-dropdown auto-close="'outside'">
    <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Sign in</button>
    <div ngb-dropdown-menu class="p-3">
        <form ng-submit="example.submit()">
            <div class="mb-3">
                <label class="form-label" for="dropdown-form-email">Email address</label>
                <input
                    id="dropdown-form-email"
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                    ng-model="example.email"
                    required>
            </div>
            <div class="form-check mb-3">
                <input
                    id="dropdown-form-remember"
                    type="checkbox"
                    class="form-check-input"
                    ng-model="example.remember">
                <label class="form-check-label" for="dropdown-form-remember">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary w-100">Continue</button>
            <p class="small text-success mt-2 mb-0" ng-if="example.submitted">Form submitted.</p>
        </form>
    </div>
</div>
`),e.put(`src/app/features/lib/components/dropdown-body/dropdown-body.component.html`,`<div class="border rounded p-3 overflow-hidden">
    <p class="small text-body-secondary mb-3">
        The wrapper clips overflowing content, but the menu is appended to the document body.
    </p>

    <div ngb-dropdown container="body">
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Open body container</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Account</button>
            <button type="button" ngb-dropdown-item>Notifications</button>
            <button type="button" ngb-dropdown-item>Privacy</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/disabled-datepicker/disabled-datepicker.component.html`,`<div class="form-check form-switch mb-3">
    <input id="disabled-datepicker-switch" class="form-check-input" type="checkbox" ng-model="example.disabled">
    <label class="form-check-label" for="disabled-datepicker-switch">Disable datepicker</label>
</div>
<ngb-datepicker ng-model="example.date" ng-disabled="example.disabled"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.html`,`<p class="small text-body-secondary">Focus the calendar and press <kbd>[</kbd> or <kbd>]</kbd> to navigate by month. The built-in arrow, Home, End and Page keys continue to work.</p>
<div ng-keydown="example.onKeydown($event)">
    <ngb-datepicker ng-model="example.date" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/datepicker-i18n/datepicker-i18n.component.html`,`<ngb-datepicker ng-model="example.date" i18n="example.i18n" weekdays="'short'"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/datepicker-global/datepicker-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div><p class="fw-semibold mb-1">Global defaults used by this example</p><p class="small text-body-secondary mb-0">Two months, arrow navigation, hidden outside days, week numbers and short weekday labels.</p></div>
</div>
<div class="overflow-auto pb-3"><ngb-datepicker ng-model="example.inlineDate"></ngb-datepicker></div>
<div class="input-group" style="max-width: 22rem">
    <input class="form-control" ng-model="example.popupDate" ngb-datepicker aria-label="Globally configured popup datepicker">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3"></i></button>
</div>
`),e.put(`src/app/features/lib/components/datepicker-position-target/datepicker-position-target.component.html`,`<div class="row g-3 align-items-end">
    <div class="col-sm-7">
        <label class="form-label" for="positioned-datepicker-input">The input controls the popup</label>
        <div class="input-group">
            <input id="positioned-datepicker-input" class="form-control" ng-model="example.date" ngb-datepicker position-target="example.target">
            <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()">Open</button>
        </div>
    </div>
    <div class="col-sm-5 text-sm-end">
        <span id="datepicker-custom-position-target" class="d-inline-flex align-items-center gap-2 px-3 py-2 rounded border bg-body-tertiary">
            <i class="bi bi-crosshair" aria-hidden="true"></i> Popup target
        </span>
    </div>
</div>
`),e.put(`src/app/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.html`,`<ng-template ng-ref="example.content" let-datepicker>
    <div class="d-flex align-items-center justify-content-between gap-2 p-2 border-bottom bg-body-tertiary">
        <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.previous(datepicker)" aria-label="Previous month"><i class="bi bi-chevron-left"></i></button>
        <button type="button" class="btn btn-sm btn-link text-decoration-none" ng-click="example.today(datepicker)">Today</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" ng-click="example.next(datepicker)" aria-label="Next month"><i class="bi bi-chevron-right"></i></button>
    </div>
    <div class="docs-month-layout p-2">
        <div ng-repeat="month in datepicker.model.months track by $index">
            <p class="small fw-semibold text-center mb-1">{{ datepicker.i18n.getMonthLabel(month.firstDate) }}</p>
            <ngb-datepicker-month month="month.firstDate" datepicker="datepicker"></ngb-datepicker-month>
        </div>
    </div>
</ng-template>
<div class="overflow-auto pb-2">
    <ngb-datepicker display-months="2" navigation="none" outside-days="hidden" content-template="example.content"></ngb-datepicker>
</div>
`),e.put(`src/app/features/lib/components/datepicker-footer/datepicker-footer.component.html`,`<ng-template ng-ref="example.footer">
    <div class="d-flex gap-2 p-2 border-top bg-body-tertiary">
        <button type="button" class="btn btn-primary btn-sm" ng-click="example.today()">Today</button>
        <button type="button" class="btn btn-outline-secondary btn-sm ms-auto" ng-click="example.clear()">Clear</button>
    </div>
</ng-template>
<ngb-datepicker ng-model="example.date" footer-template="example.footer" ng-ref="example.datepicker" ng-ref-read="ngbDatepicker"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/dropdown-button-groups/dropdown-button-groups.component.html`,`<div class="d-flex flex-wrap gap-3">
    <div class="btn-group" ngb-dropdown>
        <button type="button" class="btn btn-primary" ngb-dropdown-toggle>Button group</button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Edit</button>
            <button type="button" ngb-dropdown-item>Duplicate</button>
            <button type="button" ngb-dropdown-item>Archive</button>
        </div>
    </div>

    <div class="btn-group" ngb-dropdown>
        <button type="button" class="btn btn-success">Save</button>
        <button
            type="button"
            class="btn btn-success dropdown-toggle-split"
            ngb-dropdown-toggle
            aria-label="More save options">
            <span class="visually-hidden">Toggle dropdown</span>
        </button>
        <div ngb-dropdown-menu>
            <button type="button" ngb-dropdown-item>Save as draft</button>
            <button type="button" ngb-dropdown-item>Save and publish</button>
            <button type="button" ngb-dropdown-item>Save a copy</button>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/custom-pagination/custom-pagination.component.html`,`<ngb-pagination
    collection-size="50"
    page="example.page"
    page-change="example.selectPage($event)">
    <ng-template ngb-pagination-previous>
        <span aria-hidden="true">←</span> Previous
    </ng-template>
    <ng-template ngb-pagination-next>
        Next <span aria-hidden="true">→</span>
    </ng-template>
    <ng-template ngb-pagination-number let-page>
        <span class="fw-semibold">{{ page }}</span>
    </ng-template>
</ngb-pagination>
`),e.put(`src/app/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component.html`,`<label class="form-label" for="custom-adapter-input">Date using <code>dd.mm.yyyy</code></label>
<div class="input-group" style="max-width: 22rem">
    <input id="custom-adapter-input" class="form-control" ng-model="example.date" ngb-datepicker date-adapter="example.adapter" parser-formatter="example.formatter">
    <button type="button" class="btn btn-outline-secondary" ng-click="$datepicker.toggle()" aria-label="Toggle calendar"><i class="bi bi-calendar3" aria-hidden="true"></i></button>
</div>
<p class="small text-body-secondary mt-3 mb-0">Application model: <code>{{ example.date }}</code></p>
`),e.put(`src/app/features/lib/components/custom-nav/custom-nav.component.html`,`<div
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    roles="false"
    class="nav-custom">
    <div ngb-nav-item="custom-daily">
        <button type="button" ngb-nav-link>Daily</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Daily activity summary.</p></ng-template>
    </div>
    <div ngb-nav-item="custom-weekly">
        <button type="button" ngb-nav-link>Weekly</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Weekly activity summary.</p></ng-template>
    </div>
    <div ngb-nav-item="custom-monthly">
        <button type="button" ngb-nav-link>Monthly</button>
        <ng-template ngb-nav-content><p class="pt-3 mb-0">Monthly activity summary.</p></ng-template>
    </div>
</div>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.html`,`<ng-template ng-ref="example.customDay" let-date let-data="data" let-selected="selected" let-today="today" let-focused="focused">
    <span class="docs-custom-day" ng-class="{ selected: selected, today: today, weekend: data.weekend, focused: focused }">
        {{ date.day }}
        <i ng-if="today" class="bi bi-dot" aria-hidden="true"></i>
    </span>
</ng-template>
<ngb-datepicker ng-model="example.date" day-template="example.customDay" day-template-data="example.dayData"></ngb-datepicker>
`),e.put(`src/app/features/lib/components/closeable-toast/closeable-toast.component.html`,`<div class="toast-container position-static">
    <ngb-toast ng-if="example.visible" header="Close me" autohide="false" hidden="example.close()">
        Use the close button in the header. This toast will return after three seconds.
    </ngb-toast>

    <div ng-if="!example.visible" class="alert alert-light border mb-0" role="status">
        The toast will be back shortly.
    </div>
</div>
`),e.put(`src/app/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" value="25"><strong>25%</strong></ngb-progressbar>
    <ngb-progressbar type="info" value="50">Copying file <strong class="ms-1">2 of 4</strong></ngb-progressbar>
    <ngb-progressbar type="warning" value="75" striped="true" animated="true"><em>Almost there…</em></ngb-progressbar>
    <ngb-progressbar type="danger" value="100">Completed!</ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/carousel-simple/carousel-simple.component.html`,`<ngb-carousel aria-label="Featured landscapes">
    <ng-template ngb-slide id="simple-mountain">
        <img
            src="https://picsum.photos/id/944/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="First carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Explore new perspectives</h3>
            <p>Default navigation arrows and indicators are enabled.</p>
        </div>
    </ng-template>

    <ng-template ngb-slide id="simple-lake">
        <img
            src="https://picsum.photos/id/1011/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Second carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Move at your own pace</h3>
            <p>Use either the controls or the navigation indicators.</p>
        </div>
    </ng-template>

    <ng-template ngb-slide id="simple-valley">
        <img
            src="https://picsum.photos/id/984/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Third carousel slide">
        <div class="carousel-caption d-none d-md-block">
            <h3 class="h5">Ready by default</h3>
            <p>No local configuration is required.</p>
        </div>
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html`,`<div class="vstack gap-3">
    <ngb-progressbar type="success" text-type="white" value="25" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="dark" text-type="white" value="50" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="light" text-type="success" value="75" show-value="true"></ngb-progressbar>
    <ngb-progressbar type="warning" text-type="dark" value="100" show-value="true"></ngb-progressbar>
</div>
`),e.put(`src/app/features/lib/components/carousel-keyboard/carousel-keyboard.component.html`,`<p class="small text-body-secondary mb-3">
    Click the carousel to focus it, then use the
    <kbd class="mx-1">←</kbd>
    and
    <kbd class="mx-1">→</kbd>
    keys.
</p>

<ngb-carousel
    aria-label="Keyboard-controlled carousel"
    interval="0"
    keyboard="true"
    show-navigation-arrows="false"
    show-navigation-indicators="false">
    <ng-template ngb-slide id="keyboard-dog">
        <img
            src="https://picsum.photos/id/1025/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Dog wrapped in a blanket">
    </ng-template>

    <ng-template ngb-slide id="keyboard-river">
        <img
            src="https://picsum.photos/id/1035/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="River running through a forest">
    </ng-template>

    <ng-template ngb-slide id="keyboard-coast">
        <img
            src="https://picsum.photos/id/1043/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Rocky coastline">
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/carousel-global/carousel-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Slides change every 2.5 seconds without animation, do not pause on hover or focus,
            hide the arrows and stop after the final slide.
        </p>
    </div>
</div>

<ngb-carousel aria-label="Carousel using global configuration">
    <ng-template ngb-slide id="global-coast">
        <img
            src="https://picsum.photos/id/11/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="First globally configured carousel slide">
    </ng-template>

    <ng-template ngb-slide id="global-mountains">
        <img
            src="https://picsum.photos/id/29/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Second globally configured carousel slide">
    </ng-template>

    <ng-template ngb-slide id="global-city">
        <img
            src="https://picsum.photos/id/42/900/500"
            class="d-block w-100 h-auto"
            width="900"
            height="500"
            alt="Third globally configured carousel slide">
    </ng-template>
</ngb-carousel>
`),e.put(`src/app/features/lib/components/carousel-controls/carousel-controls.component.html`,`<div class="d-flex flex-column gap-3">
    <div class="row g-3">
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-hover"
                    ng-model="example.pauseOnHover">
                <label class="form-check-label" for="carousel-pause-hover">Pause on hover</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-focus"
                    ng-model="example.pauseOnFocus">
                <label class="form-check-label" for="carousel-pause-focus">Pause on focus</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-unpause-arrows"
                    ng-model="example.unpauseOnArrow">
                <label class="form-check-label" for="carousel-unpause-arrows">Unpause when clicking an arrow</label>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="form-check form-switch">
                <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="carousel-pause-indicator"
                    ng-model="example.pauseOnIndicator">
                <label class="form-check-label" for="carousel-pause-indicator">Pause when clicking an indicator</label>
            </div>
        </div>
    </div>

    <div>
        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.toggleCycle()">
            <i class="bi me-1" ng-class="example.paused ? 'bi-play-fill' : 'bi-pause-fill'" aria-hidden="true"></i>
            {{ example.paused ? 'Cycle' : 'Pause' }}
        </button>
    </div>

    <ngb-carousel
        aria-label="Configurable carousel"
        interval="3000"
        pause-on-hover="example.pauseOnHover"
        pause-on-focus="example.pauseOnFocus"
        show-navigation-arrows="true"
        show-navigation-indicators="true"
        slide="example.onSlide($event)">
        <ng-template ngb-slide id="controls-building">
            <img
                src="https://picsum.photos/id/1050/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Building beside the water">
        </ng-template>

        <ng-template ngb-slide id="controls-landscape">
            <img
                src="https://picsum.photos/id/1067/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Open landscape at sunset">
        </ng-template>

        <ng-template ngb-slide id="controls-field">
            <img
                src="https://picsum.photos/id/1074/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Field beneath a cloudy sky">
        </ng-template>

        <ng-template ngb-slide id="controls-hills">
            <img
                src="https://picsum.photos/id/1084/900/500"
                class="d-block w-100 h-auto"
                width="900"
                height="500"
                alt="Hills in warm light">
        </ng-template>
    </ngb-carousel>
</div>
`),e.put(`src/app/features/lib/components/basic-timepicker/basic-timepicker.component.html`,`<div class="d-flex flex-column align-items-start gap-3">
    <ngb-timepicker ng-model="example.time"></ngb-timepicker>
    <hr class="w-100 my-0">
    <pre class="w-100 mb-0">Selected time: {{ example.time | json }}</pre>
</div>
`),e.put(`src/app/features/lib/components/basic-rating/basic-rating.component.html`,`<ngb-rating rate="example.rating" rate-change="example.setRating($event)"></ngb-rating>
<hr>
<p class="mb-0">Rate: <strong>{{ example.rating }}</strong></p>
`),e.put(`src/app/features/lib/components/alternative-nav/alternative-nav.component.html`,`<nav
    ngb-nav
    ng-ref="example.nav"
    ng-ref-read="ngbNav"
    active-id="example.activeId"
    class="nav-tabs">
    <div ngb-nav-item="alternative-home">
        <button type="button" ngb-nav-link>Button link</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">This item uses a button without list markup.</p>
        </ng-template>
    </div>
    <div ngb-nav-item="alternative-profile">
        <a ngb-nav-link>Anchor link</a>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">This item uses an anchor inside a plain div.</p>
        </ng-template>
    </div>
    <div ngb-nav-item="alternative-contact">
        <button type="button" ngb-nav-link>Another button</button>
        <ng-template ngb-nav-content>
            <p class="pt-3 mb-0">Buttons and anchors can be interchanged.</p>
        </ng-template>
    </div>
</nav>

<div ngb-nav-outlet="example.nav"></div>
`),e.put(`src/app/features/lib/components/basic-scrollspy/basic-scrollspy.component.html`,`<div
    class="bg-body-tertiary border rounded p-3 mb-3"
    style="height: 14rem"
    ngb-scroll-spy
    root-margin="0px 0px -45%"
    ng-ref="example.spy"
    ng-ref-read="ngbScrollSpy">
    <section class="pb-5" ngb-scroll-spy-fragment="basic-scrollspy-first">
        <h3 class="h5">First heading</h3>
        <p>Scrollspy observes each registered fragment and keeps track of the section currently crossing the viewport.</p>
    </section>
    <section class="pb-5" ngb-scroll-spy-fragment="basic-scrollspy-second">
        <h3 class="h5">Second heading</h3>
        <p>The scroll container is the element carrying the <code>ngb-scroll-spy</code> directive.</p>
    </section>
    <section class="pb-5 mb-5" ngb-scroll-spy-fragment="basic-scrollspy-third">
        <h3 class="h5">Third heading</h3>
        <p class="mb-5">Every fragment gets its DOM id from <code>ngb-scroll-spy-fragment</code>.</p>
    </section>
</div>

<p class="small text-body-secondary mb-0">
    Active fragment: <code>{{ example.spy.active || 'none' }}</code>
</p>
`),e.put(`src/app/features/lib/components/basic-pagination/basic-pagination.component.html`,`<ngb-pagination
    collection-size="70"
    page="example.page"
    page-change="example.selectPage($event)">
</ngb-pagination>

<p class="small text-body-secondary mb-0">Current page: <strong>{{ example.page }}</strong></p>
`),e.put(`src/app/features/lib/components/basic-datepicker/basic-datepicker.component.html`,`<ngb-datepicker ng-model="example.date"></ngb-datepicker>
<p class="small text-body-secondary mt-3 mb-0">Selected date: <code>{{ example.date | json }}</code></p>
`),e.put(`src/app/features/lib/components/advanced-pagination/advanced-pagination.component.html`,`<div class="vstack gap-4">
    <div>
        <p class="small fw-semibold mb-2">Restricted page range</p>
        <ngb-pagination
            collection-size="120"
            page="example.paginatedPage"
            page-change="example.selectPaginatedPage($event)"
            max-size="5"
            boundary-links="true">
        </ngb-pagination>
    </div>

    <div>
        <p class="small fw-semibold mb-2">Rotating page range</p>
        <ngb-pagination
            collection-size="240"
            page="example.rotatedPage"
            page-change="example.selectRotatedPage($event)"
            max-size="5"
            rotate="true"
            boundary-links="true">
        </ngb-pagination>
    </div>

    <div>
        <p class="small fw-semibold mb-2">Without ellipses</p>
        <ngb-pagination
            collection-size="240"
            page="example.compactPage"
            page-change="example.selectCompactPage($event)"
            max-size="5"
            rotate="true"
            ellipses="false">
        </ngb-pagination>
    </div>
</div>
`),e.put(`src/app/features/lib/components/alert-global/alert-global.component.html`,`<div class="alert alert-light border d-flex align-items-start gap-3" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            The default type is success, animations are disabled and alerts are not dismissible.
        </p>
    </div>
</div>

<ngb-alert>
    This alert has no local inputs. Its appearance and behavior come from <code>NgbAlertConfig</code>.
</ngb-alert>
`),e.put(`src/app/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.html`,`<div class="d-flex flex-wrap gap-2 mb-3">
    <button type="button" class="btn btn-primary btn-sm" ng-click="example.expandAll()">Expand all</button>
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.collapseAll()">Collapse all</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle('toggle-first')">Toggle first</button>
    <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="example.toggle('toggle-second')">Toggle second</button>
</div>

<div
    ngb-accordion
    animation="true"
    close-others="false"
    destroy-on-hide="true"
    ng-ref="accordion"
    ng-ref-read="ngbAccordion">
    <div ngb-accordion-item="'toggle-first'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This panel can be controlled from its header or the buttons above.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'toggle-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Use the accordion controller to expand, collapse or toggle known ids.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/alert-custom/alert-custom.component.html`,`<ngb-alert type="custom" dismissible="false" animation="false">
    <div class="d-flex align-items-start gap-3">
        <i class="bi bi-lightning-charge-fill fs-4 text-primary" aria-hidden="true"></i>
        <div>
            <h3 class="h6 mb-1">Custom alert</h3>
            <p class="mb-0">The <code>.alert-custom</code> class defines this theme without changing NgbJS.</p>
        </div>
    </div>
</ngb-alert>
`),e.put(`src/app/features/lib/components/accordion-global/accordion-global.component.html`,`<div class="alert alert-light border d-flex gap-3 align-items-start" role="note">
    <i class="bi bi-gear text-primary mt-1" aria-hidden="true"></i>
    <div>
        <p class="fw-semibold mb-1">Global defaults used by this example</p>
        <p class="small text-body-secondary mb-0">
            Animation is disabled, only one panel stays open and collapsed content remains in the DOM.
        </p>
    </div>
</div>

<div ngb-accordion>
    <div ngb-accordion-item="'global-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>First panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This accordion receives its behavior from <code>NgbAccordionConfig</code>.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'global-second'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Second panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Opening this item collapses the first without local accordion inputs.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/lib/components/accordion-simple/accordion-simple.component.html`,`<ng-template ng-ref="templateHeader">
    <span class="d-inline-flex align-items-center gap-2">
        <i class="bi bi-stars text-primary" aria-hidden="true"></i>
        Header rendered from an ng-template
    </span>
</ng-template>

<div ngb-accordion animation="true" close-others="false" destroy-on-hide="true">
    <div ngb-accordion-item="'simple-first'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Regular header</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">This panel uses the standard accordion header and button.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'simple-template'">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>
                <ng-container ng-template-outlet="templateHeader"></ng-container>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The header content comes from a reusable AngularJS template.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'simple-disabled'" ng-disabled="true">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Disabled panel</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Disabled items ignore pointer and keyboard toggle actions.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/home/pages/home-page/home-page.component.html`,`<docs-header show-menu="false"></docs-header>

<docs-home-hero></docs-home-hero>

<section class="container px-4 text-center">
    <div class="row justify-content-center mb-5">
        <div class="col-md-10 col-lg-9 col-xl-8">
            <p class="small text-body-secondary mb-2">
                Install with npm
            </p>

            <div class="d-flex align-items-center gap-3 rounded-3 border border-secondary bg-black px-3 py-3 text-start shadow-sm">
                <code class="flex-grow-1 fs-5 text-light">{{ $.installCommand }}</code>

                <docs-copy-button
                    value="$.installCommand"
                    button-class="text-light"
                    aria-label="Copy install command">
                </docs-copy-button>
            </div>
        </div>
    </div>
</section>
`),e.put(`src/app/features/lib/components/accordion-custom-header/accordion-custom-header.component.html`,`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="true">
    <div ngb-accordion-item="'custom-profile'" collapsed="false">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary p-2">
                    <i class="bi bi-person" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Profile</span>
                    <span class="d-block small fw-normal text-body-secondary">Personal information and public details</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Custom headers can combine Bootstrap utilities, icons and supporting text.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'custom-preferences'">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning-emphasis p-2">
                    <i class="bi bi-sliders" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Preferences</span>
                    <span class="d-block small fw-normal text-body-secondary">Language, appearance and notifications</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">The toggle directive supplies behavior while Bootstrap classes define the presentation.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div ngb-accordion-item="'custom-security'">
        <h2 ngb-accordion-header>
            <button type="button" class="accordion-button d-flex align-items-center gap-3" ngb-accordion-toggle>
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success p-2">
                    <i class="bi bi-shield-lock" aria-hidden="true"></i>
                </span>
                <span>
                    <span class="d-block fw-semibold">Security</span>
                    <span class="d-block small fw-normal text-body-secondary">Password and active sessions</span>
                </span>
            </button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <p class="mb-0">Use semantic buttons so custom headers remain keyboard accessible.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Why NgbJS?</h1>
        <p class="lead text-body-secondary mb-0">
            Because a legacy application can still be critical, actively developed, and expected to
            deliver a modern experience.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="the-legacy-reality">
        <h2 class="h3 mb-3">The legacy reality</h2>
        <p class="lead text-body-secondary">
            A full migration is not always the next available step.
        </p>
        <p>
            Large AngularJS applications often contain years of business rules, integrations, and
            operational knowledge. Replacing them can demand more time, budget, and coordination than a
            team currently has, even while users continue to expect new features and current interfaces.
        </p>
        <p class="mb-0">
            Without a modern component library, teams must either stop improving the interface or rebuild
            common interactions themselves. Neither option makes the legacy application easier to maintain
            or eventually migrate.
        </p>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="before-and-after">
        <h2 class="h3 mb-4">From repeated adaptation to a shared model</h2>

        <div class="row g-4">
            <div class="col-lg-6">
                <div class="h-100 rounded-3 border p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-copy text-body-secondary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">Without NgbJS</h3>
                    </div>
                    <ul class="text-body-secondary mb-0 ps-3">
                        <li class="mb-2">Copy the modern component markup.</li>
                        <li class="mb-2">Translate it to AngularJS syntax.</li>
                        <li class="mb-2">Rebuild interactions and state by hand.</li>
                        <li class="mb-2">Accept incomplete or inconsistent behavior.</li>
                        <li>Maintain two unrelated implementations over time.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="h-100 rounded-3 border border-primary bg-primary-subtle p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-link-45deg text-primary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">With NgbJS</h3>
                    </div>
                    <ul class="mb-0 ps-3">
                        <li class="mb-2">Start from a familiar ng-bootstrap API.</li>
                        <li class="mb-2">Reuse the same component model and terminology.</li>
                        <li class="mb-2">Rely on packaged, documented behavior.</li>
                        <li class="mb-2">Reduce differences between both applications.</li>
                        <li>Make later migration work more predictable.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-it-unlocks">
        <h2 class="h3 mb-3">What NgbJS unlocks</h2>
        <p class="text-body-secondary mb-4">
            The value is not only in the components themselves, but in the consistency they create.
        </p>

        <div class="row g-3">
            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-window fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Modern interfaces</h3>
                    <p class="small text-body-secondary mb-0">
                        Give active AngularJS products current Bootstrap components and interactions.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-person-check fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">A familiar API</h3>
                    <p class="small text-body-secondary mb-0">
                        Let ng-bootstrap experience remain useful when developers work in AngularJS.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-arrows-angle-contract fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Less divergence</h3>
                    <p class="small text-body-secondary mb-0">
                        Keep parallel applications closer in terminology, behavior, and implementation.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-tools fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Less custom maintenance</h3>
                    <p class="small text-body-secondary mb-0">
                        Replace one-off, partially implemented components with reusable library behavior.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-journal-code fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Transferable knowledge</h3>
                    <p class="small text-body-secondary mb-0">
                        Share concepts, documentation patterns, and conventions across framework versions.
                    </p>
                </div>
            </div>

            <div class="col-md-6 col-xl-4">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-signpost-2 fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">A clearer migration path</h3>
                    <p class="small text-body-secondary mb-0">
                        Reduce the conceptual changes required when a component eventually moves to Angular.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="when-to-use-ngbjs">
        <h2 class="h3 mb-4">When should you use NgbJS?</h2>

        <div class="row g-4">
            <div class="col-lg-6">
                <div class="h-100 rounded-3 border border-success-subtle bg-success-subtle p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-check-circle-fill text-success" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">A strong fit</h3>
                    </div>
                    <ul class="mb-0 ps-3">
                        <li class="mb-2">Your AngularJS application will remain active.</li>
                        <li class="mb-2">A complete migration is not currently realistic.</li>
                        <li class="mb-2">Modern and legacy applications must stay consistent.</li>
                        <li class="mb-2">Your team already knows ng-bootstrap.</li>
                        <li>You want to make a gradual migration less disruptive.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="h-100 rounded-3 border p-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-x-circle-fill text-body-secondary" aria-hidden="true"></i>
                        <h3 class="h5 mb-0">Probably not the right fit</h3>
                    </div>
                    <ul class="text-body-secondary mb-0 ps-3">
                        <li class="mb-2">You are starting a new application.</li>
                        <li class="mb-2">You can use modern Angular and ng-bootstrap directly.</li>
                        <li class="mb-2">Your product does not use Bootstrap.</li>
                        <li>Your legacy application is already close to retirement.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="a-bridge-not-a-destination">
        <div class="rounded-4 bg-body-tertiary border p-4 p-md-5 text-center">
            <i class="bi bi-signpost-split fs-2 text-primary" aria-hidden="true"></i>
            <h2 class="h3 mt-3">A bridge, not a destination</h2>
            <p class="text-body-secondary mx-auto mb-4" style="max-width: 42rem;">
                NgbJS does not make AngularJS the right choice for new products, and it does not replace a
                migration strategy. It helps valuable existing applications move forward while that
                strategy becomes possible.
            </p>
            <a class="btn btn-primary" ui-sref="docs.dashboard.accordion">
                Explore the components
                <i class="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </a>
        </div>
    </section>
</article>
`),e.put(`src/app/features/lib/components/accordion-content/accordion-content.component.html`,`<div ngb-accordion animation="true" close-others="false" destroy-on-hide="false">
    <div ngb-accordion-item="'persistent-content'" collapsed="false">
        <h2 ngb-accordion-header>
            <button ngb-accordion-button>Persistent form content</button>
        </h2>
        <div ngb-accordion-collapse>
            <div ngb-accordion-body>
                <ng-template>
                    <label class="form-label" for="accordion-persistent-value">Draft value</label>
                    <input
                        id="accordion-persistent-value"
                        class="form-control"
                        type="text"
                        ng-model="example.draft">
                    <p class="small text-body-secondary mt-2 mb-0">
                        Edit the value, collapse the panel and open it again. The same view remains in the DOM.
                    </p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`),e.put(`src/app/features/guide/pages/introduction-page/introduction-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Introduction</h1>
        <p class="lead text-body-secondary mb-0">
            Modern Bootstrap components for AngularJS, shaped by the API and behavior of ng-bootstrap.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="origin">
        <div class="row g-4 align-items-stretch">
            <div class="col-lg-8">
                <h2 class="h3 mb-3">Born from a real legacy application</h2>

                <p>
                    NgbJS began inside a large AngularJS application that was still essential to the
                    business, but too complex to migrate all at once. The application needed to keep
                    evolving and deliver a modern interface while staying aligned with another product
                    built with modern Angular and ng-bootstrap.
                </p>

                <p>
                    A feature created for the modern application, such as a payment flow, also needed an
                    AngularJS counterpart. In the modern codebase, ng-bootstrap provided the components
                    and their behavior. In the legacy application, the same work meant copying markup,
                    adapting it to the older stack, and rebuilding interactions by hand—often only
                    partially.
                </p>

                <p class="mb-0">
                    NgbJS grew out of that repeated translation work: bring the ng-bootstrap experience
                    to AngularJS and reduce the distance between both applications.
                </p>
            </div>

            <div class="col-lg-4 d-flex">
                <aside class="h-100 w-100 d-flex flex-column justify-content-center rounded-3 bg-body-tertiary border p-4">
                    <i class="bi bi-arrow-left-right fs-3 text-primary" aria-hidden="true"></i>
                    <p class="h5 mt-3 mb-2">One component model</p>
                    <p class="small text-body-secondary mb-0">
                        Build familiar experiences across AngularJS and Angular without reinventing every
                        component for the legacy application.
                    </p>

                    <div class="d-grid gap-3 mt-4 pt-4 border-top text-center">
                        <div class="rounded-3 border bg-body px-3 py-3">
                            <span class="badge rounded-pill bg-primary-subtle text-primary-emphasis">Modern</span>
                            <p class="small fw-semibold mt-2 mb-0">Angular + ng-bootstrap</p>
                        </div>

                        <div class="text-body-secondary lh-1" aria-hidden="true">
                            <i class="bi bi-arrow-down-up"></i>
                        </div>

                        <div class="rounded-3 border bg-body px-3 py-3">
                            <span class="badge rounded-pill bg-primary-subtle text-primary-emphasis">Legacy</span>
                            <p class="small fw-semibold mt-2 mb-0">AngularJS + NgbJS</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-is-ngbjs">
        <h2 class="h3 mb-3">What is NgbJS?</h2>

        <p class="lead text-body-secondary">
            NgbJS is a port of ng-bootstrap for AngularJS, designed to preserve its API and behavior as
            closely as the differences between the two frameworks allow.
        </p>

        <p>
            It is more than a collection of visually similar components. NgbJS aims to preserve the same
            mental model: developers who know ng-bootstrap should recognize its components, services,
            options, and interaction patterns, then move between AngularJS and Angular with fewer changes.
        </p>

        <p class="mb-0">
            Features that initially appeared difficult to reproduce were not simply discarded. Supporting
            them also led to complementary infrastructure such as <code>ngjs-core</code>, which brings
            capabilities required by NgbJS into the AngularJS environment.
        </p>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="who-is-it-for">
        <h2 class="h3 mb-3">Who is it for?</h2>
        <p class="text-body-secondary mb-4">
            NgbJS is intended for teams whose AngularJS applications still need to grow, even when a full
            migration is not immediately possible.
        </p>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-buildings fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Long-lived applications</h3>
                    <p class="text-body-secondary mb-0">
                        Critical AngularJS systems that will remain in production and continue receiving
                        features for years.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-layers fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Mixed technology stacks</h3>
                    <p class="text-body-secondary mb-0">
                        Products where AngularJS and modern Angular applications must provide consistent
                        interfaces and behavior.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-signpost-split fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Gradual migrations</h3>
                    <p class="text-body-secondary mb-0">
                        Teams preparing for a future migration while working within current time, budget,
                        or architectural constraints.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-bootstrap fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">ng-bootstrap developers</h3>
                    <p class="text-body-secondary mb-0">
                        Developers who want familiar Bootstrap components and APIs when moving between
                        modern Angular and AngularJS codebases.
                    </p>
                </div>
            </div>
        </div>

        <div class="alert alert-secondary d-flex gap-3 mt-4 mb-0" role="note">
            <i class="bi bi-info-circle-fill flex-shrink-0" aria-hidden="true"></i>
            <div>
                NgbJS is not a reason to choose AngularJS for a new application. It exists to help
                established AngularJS systems modernize and move forward.
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="project-status">
        <div class="rounded-3 border border-warning-subtle bg-warning-subtle p-4">
            <div class="d-flex align-items-center gap-2 mb-2">
                <span class="badge text-bg-warning">Beta</span>
                <h2 class="h4 mb-0">Project status</h2>
            </div>

            <p class="mb-0">
                NgbJS is in beta because some components are still under review and may contain known bugs
                or edge cases that are not yet fully covered. Its syntax and intended behavior follow
                ng-bootstrap and are not expected to change as part of this review; ongoing work focuses on
                validation, fixes, and bringing each implementation to full parity.
            </p>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="installation">
        <h2 class="h3 mb-3">Installation</h2>
        <p class="text-body-secondary mb-4">
            Add NgbJS to your project with your preferred package manager.
        </p>

        <div class="rounded-3 border overflow-hidden">
            <div class="bg-body-tertiary border-bottom px-3 pt-2">
                <ul
                    class="nav nav-tabs border-bottom-0"
                    ngb-nav
                    active-id="$.activePackageManager"
                    animation="false"
                    ng-ref="$.packageManagerNav"
                    ng-ref-read="ngbNav">
                    <li
                        ng-repeat="manager in $.packageManagers track by manager.id"
                        ngb-nav-item="{{ manager.id }}">
                        <button type="button" ngb-nav-link>{{ manager.name }}</button>

                        <ng-template ngb-nav-content>
                            <div class="d-flex align-items-center gap-3 bg-black px-3 py-3">
                                <code class="flex-grow-1 text-light">{{ manager.command }}</code>
                                <docs-copy-button
                                    value="manager.command"
                                    button-class="text-light"
                                    aria-label="Copy {{ manager.name }} install command">
                                </docs-copy-button>
                            </div>
                        </ng-template>
                    </li>
                </ul>
            </div>

            <div ngb-nav-outlet="$.packageManagerNav"></div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="acknowledgements">
        <div class="row g-4 align-items-start">
            <div class="col-md-auto">
                <div class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary" style="width: 3rem; height: 3rem;">
                    <i class="bi bi-heart-fill" aria-hidden="true"></i>
                </div>
            </div>

            <div class="col">
                <h2 class="h3 mb-3">Built on the work of ng-bootstrap</h2>
                <p>
                    NgbJS exists thanks to the outstanding work of the
                    <a href="https://github.com/ng-bootstrap/ng-bootstrap" target="_blank" rel="noopener noreferrer">ng-bootstrap team and community</a>.
                    Its API, architecture, components, and documentation have been the primary reference
                    for this port.
                </p>
                <p>
                    Portions of this documentation are adapted from the
                    <a href="https://ng-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">official ng-bootstrap documentation</a>,
                    licensed under
                    <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>.
                    Changes were made to reflect AngularJS, the NgbJS API, and this project's examples.
                </p>
                <p>
                    Parts of NgbJS are derived from and adapted from the ng-bootstrap source code, used under
                    the terms of its
                    <a href="https://github.com/ng-bootstrap/ng-bootstrap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
                </p>
                <p class="text-body-secondary mb-0">
                    NgbJS is an independent project and is not part of the official ng-bootstrap project.
                    It is built with deep respect and gratitude for the people who created and continue to
                    maintain the original library.
                </p>
            </div>
        </div>
    </section>
</article>
`),e.put(`src/app/features/home/components/home-hero/home-hero.component.html`,`<section class="container px-4 py-5 text-center">
    <div class="row justify-content-center pt-5 mt-lg-5">
        <div class="col-lg-11 col-xl-10">
            <p class="h4 fw-bold text-primary mb-4">
                NgbJS
                <small class="fs-6 fw-normal text-body-secondary ms-2">Beta 1.0</small>
            </p>

            <h1 class="display-2 fw-bold lh-1 mb-4 text-body-emphasis">
                <span class="text-primary">Parity</span> is Priority.
            </h1>

            <p class="lead fs-4 text-body-secondary mb-0">
                ng-bootstrap components and APIs, thoughtfully ported to AngularJS with
                Bootstrap-native styling and behavior.
            </p>
        </div>
    </div>

    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center mt-5 mb-5">
        <a ui-sref="docs.dashboard.introduction" class="btn btn-primary btn-lg px-4">
            Get started
        </a>

        <a ui-sref="docs.dashboard.accordion" class="btn btn-outline-secondary btn-lg px-4">
            Documentation
        </a>
    </div>
</section>
`),e.put(`src/app/features/lib/components/alert-closeable/alert-closeable.component.html`,`<div class="d-flex justify-content-end mb-3">
    <button type="button" class="btn btn-outline-primary btn-sm" ng-click="example.reset()">
        <i class="bi bi-arrow-clockwise me-1" aria-hidden="true"></i>
        Reset alerts
    </button>
</div>

<ngb-alert
    ng-repeat="alert in example.alerts track by alert.id"
    type="{{ alert.type }}"
    dismissible="true"
    animation="alert.animation"
    closed="example.close(alert.id)">
    {{ alert.message }}
    <span class="small opacity-75">{{ alert.animation ? 'Animated' : 'No animation' }}</span>
</ngb-alert>

<p class="text-body-secondary mb-0" ng-if="!example.alerts.length">
    All alerts have been closed.
</p>
`),e.put(`src/app/features/guide/pages/philosophy-page/philosophy-page.component.html`,`<article>
    <header class="pb-4 mb-5 border-bottom">
        <p class="small fw-semibold text-uppercase text-primary mb-2">Guide</p>
        <h1 class="display-5 fw-bold lh-sm text-body-emphasis mb-3">Philosophy</h1>
        <p class="lead text-body-secondary mb-0">
            NgbJS favors a familiar, predictable path between AngularJS and modern Angular.
        </p>
    </header>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="parity-is-priority">
        <div class="rounded-4 bg-primary text-white p-4 p-md-5">
            <p class="small fw-semibold text-uppercase opacity-75 mb-3">The guiding principle</p>
            <h2 class="display-6 fw-bold mb-3">Parity is Priority.</h2>
            <p class="lead mb-0 opacity-75">
                The closer NgbJS stays to ng-bootstrap, the less developers need to relearn, rewrite,
                or reinterpret when moving between AngularJS and Angular.
            </p>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="what-parity-means">
        <h2 class="h3 mb-3">What parity means</h2>
        <p class="text-body-secondary mb-4">
            Parity is not limited to matching how a component looks. It is pursued across the entire
            developer experience.
        </p>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-braces fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">API parity</h3>
                    <p class="text-body-secondary mb-0">
                        Components, services, configuration options, and public names should remain
                        recognizable to developers coming from ng-bootstrap.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-code-square fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Syntax parity</h3>
                    <p class="text-body-secondary mb-0">
                        Templates should express the same intent with as little framework-specific
                        translation as possible.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-toggles fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Behavioral parity</h3>
                    <p class="text-body-secondary mb-0">
                        Interaction, state, defaults, and edge cases should behave consistently across
                        both libraries.
                    </p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="h-100 rounded-3 border p-4">
                    <i class="bi bi-lightbulb fs-4 text-primary" aria-hidden="true"></i>
                    <h3 class="h5 mt-3">Conceptual parity</h3>
                    <p class="text-body-secondary mb-0">
                        The same mental model should apply, so knowledge gained in one codebase remains
                        useful in the other.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="familiar-by-design">
        <div class="row g-4">
            <div class="col-lg-7">
                <h2 class="h3 mb-3">Familiar by design</h2>
                <p>
                    NgbJS does not introduce a different API simply because it runs on AngularJS. When
                    ng-bootstrap already provides a well-understood solution, reproducing that solution
                    is more valuable than inventing a new abstraction.
                </p>
                <p class="mb-0">
                    Familiarity reduces context switching for teams maintaining both generations of an
                    application. Documentation, examples, and previous experience become transferable
                    instead of being tied to only one framework.
                </p>
            </div>

            <div class="col-lg-5">
                <aside class="h-100 rounded-3 bg-body-tertiary border p-4">
                    <p class="h5 mb-3">A simple decision rule</p>
                    <blockquote class="mb-0">
                        <p class="mb-2">
                            If ng-bootstrap users already know how a component should work, NgbJS should
                            make that knowledge useful.
                        </p>
                    </blockquote>
                </aside>
            </div>
        </div>
    </section>

    <section class="pb-5 mb-5 border-bottom" ngb-scroll-spy-fragment="a-migration-bridge">
        <h2 class="h3 mb-3">A bridge between codebases</h2>
        <p class="text-body-secondary mb-4">
            Parity makes day-to-day development easier now and makes a future migration more predictable.
        </p>

        <div class="row g-3 align-items-stretch text-center">
            <div class="col-md">
                <div class="h-100 rounded-3 border p-4">
                    <span class="badge text-bg-secondary mb-3">Legacy</span>
                    <h3 class="h5">AngularJS</h3>
                    <p class="small text-body-secondary mb-0">Existing application and business logic</p>
                </div>
            </div>

            <div class="col-md-auto d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right fs-4 text-body-secondary d-none d-md-block" aria-hidden="true"></i>
                <i class="bi bi-arrow-down fs-4 text-body-secondary d-md-none" aria-hidden="true"></i>
            </div>

            <div class="col-md">
                <div class="h-100 rounded-3 border border-primary bg-primary-subtle p-4">
                    <span class="badge text-bg-primary mb-3">Bridge</span>
                    <h3 class="h5">NgbJS</h3>
                    <p class="small text-body-secondary mb-0">Familiar components, APIs, and behavior</p>
                </div>
            </div>

            <div class="col-md-auto d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right fs-4 text-body-secondary d-none d-md-block" aria-hidden="true"></i>
                <i class="bi bi-arrow-down fs-4 text-body-secondary d-md-none" aria-hidden="true"></i>
            </div>

            <div class="col-md">
                <div class="h-100 rounded-3 border p-4">
                    <span class="badge text-bg-secondary mb-3">Modern</span>
                    <h3 class="h5">Angular</h3>
                    <p class="small text-body-secondary mb-0">ng-bootstrap and the target architecture</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-4" ngb-scroll-spy-fragment="when-parity-is-hard">
        <h2 class="h3 mb-3">When exact parity is difficult</h2>
        <p>
            AngularJS and Angular have different component models, template syntax, and runtime
            capabilities. Small differences are sometimes unavoidable, but they should be deliberate,
            limited, and easy to understand.
        </p>
        <p>
            A feature is not rejected only because AngularJS cannot reproduce it directly. NgbJS first
            looks for a compatible implementation that preserves the original behavior. Some of those
            efforts required supporting libraries such as <code>ngjs-core</code> to provide capabilities
            that AngularJS did not have on its own.
        </p>

        <div class="alert alert-primary d-flex gap-3 mb-0" role="note">
            <i class="bi bi-bullseye flex-shrink-0" aria-hidden="true"></i>
            <div>
                Some parts of ng-bootstrap could be reused directly, while others had to be adapted or
                reimplemented for AngularJS. In every case, the goal is to preserve the closest practical
                parity in API, intent, and behavior.
            </div>
        </div>
    </section>
</article>
`),e.put(`src/app/core/layouts/pages/menu-abstract-page/menu-abstract-page.component.html`,`<div class="vh-100 d-flex flex-column overflow-hidden">
    <docs-header></docs-header>

    <main class="container-fluid flex-grow-1 overflow-hidden px-0">
        <section class="row g-0 h-100">
            <div class="col-lg-3 col-xl-2 d-none d-lg-block h-100 overflow-y-auto bg-body-tertiary border-end">
                <docs-menu mode="desktop"></docs-menu>
            </div>

            <div
                id="docs-content-scroll"
                class="col-12 col-lg-9 col-xl-10 h-100 overflow-y-auto"
                ngb-scroll-spy
                root-margin="0px 0px -60%">
                <div class="row g-0 min-vh-100">
                    <div class="col-12 col-xl-9 d-flex flex-column min-vh-100">
                        <div class="container-xl flex-grow-1 px-3 px-md-4 px-xl-5 py-4 py-lg-5">
                            <docs-title-heading></docs-title-heading>
                            <ui-view></ui-view>
                        </div>

                        <docs-footer></docs-footer>
                    </div>

                    <docs-page-outline class="col-xl-3 d-none d-xl-block border-start"></docs-page-outline>
                </div>
            </div>
        </section>
    </main>
</div>
`),e.put(`src/app/core/layouts/components/header/header.component.html`,`<ng-template ng-ref="searchModal" ng-ref-read="ngTemplate">
    <div class="modal-header border-bottom-0 pb-0">
        <div>
            <h2 class="modal-title fs-5">Search documentation</h2>
            <p class="small text-body-secondary mb-0">Find components, guides and examples.</p>
        </div>
    </div>

    <div class="modal-body pt-3">
        <label class="visually-hidden" for="docs-search">Search documentation</label>
        <div class="input-group input-group-lg">
            <span class="input-group-text bg-body border-end-0">
                <i class="bi bi-search text-body-secondary" aria-hidden="true"></i>
            </span>
            <input id="docs-search" class="form-control border-start-0 ps-0" type="search" placeholder="Search the docs..." autocomplete="off" autofocus>
        </div>

        <div class="d-flex align-items-center justify-content-between mt-3">
            <small class="text-body-secondary">Start typing to see results</small>
            <kbd>ESC</kbd>
        </div>
    </div>
</ng-template>

<ng-template ng-ref="themeChanger">
    <button class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" ng-click="$.themeService.toggle()" type="button" aria-label="Toggle color theme">
        <i ng-if="$.themeService.activeTheme == $.themes.dark" class="bi bi-moon-fill" aria-hidden="true"></i>
        <i ng-if="$.themeService.activeTheme == $.themes.light" class="bi bi-brightness-high-fill" aria-hidden="true"></i>
    </button>

    <div class="vr mx-1 d-none d-sm-block"></div>

    <a
        class="btn btn-link text-body btn-lg d-none d-sm-inline-flex align-items-center justify-content-center"
        href="https://github.com/IonCna/ngb-js"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="NgbJS GitHub repository">
        <i class="bi bi-github" aria-hidden="true"></i>
    </a>
</ng-template>

<header class="navbar sticky-top container-fluid px-2 px-sm-3 py-2 bg-body-tertiary border-bottom shadow-sm">
    <section class="row w-100 g-2 align-items-center d-none d-lg-flex">
        <div class="col-3">
            <a class="navbar-brand d-inline-flex align-items-center gap-2 mb-0" ui-sref="docs.home">
                <span class="fw-bold">ngb-js</span>
                <span class="badge text-bg-primary rounded-pill">Docs</span>
            </a>
        </div>

        <div class="col-6 d-flex justify-content-center">
            <button ng-click="$.openModal()" class="btn btn-outline-secondary w-75 d-inline-flex justify-content-between align-items-center text-body-secondary" type="button">
                <span>
                    <i class="bi bi-search me-2" aria-hidden="true"></i>
                    <span>Search documentation</span>
                </span>

                <span class="d-flex align-items-center gap-1">
                    <kbd>CTRL</kbd>
                    <kbd>K</kbd>
                </span>
            </button>
        </div>

        <div class="col-3 d-flex align-items-center justify-content-end">
            <ng-container ng-template-outlet="themeChanger">
            </ng-container>
        </div>
    </section>

    <section class="d-flex w-100 align-items-center d-lg-none">
        <button ng-click="$.menuService.toggleMenu()" class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" type="button" aria-label="Open navigation menu">
                <i class="bi bi-list" aria-hidden="true"></i>
        </button>

        <a class="navbar-brand fw-bold ms-1 me-auto mb-0" ui-sref="docs.home">ngb-js</a>

        <div class="d-flex align-items-center">
            <button ng-click="$.openModal()" class="btn btn-link text-body btn-lg d-inline-flex align-items-center justify-content-center" type="button" aria-label="Open search">
                <i class="bi bi-search" aria-hidden="true"></i>
            </button>

            <ng-container ng-template-outlet="themeChanger">
            </ng-container>
        </div>
    </section>
</header>
`),e.put(`src/app/core/layouts/components/menu/menu.component.html`,`<ng-template ng-ref="menuContent">
    <nav class="px-3 py-2" aria-label="Documentation navigation">
        <section class="mb-4" aria-labelledby="guide-navigation-title">
            <h2 id="guide-navigation-title" class="small fw-semibold text-uppercase text-body-secondary px-2 mb-2">
                Guide
            </h2>

            <ul class="nav nav-pills flex-column gap-1">
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.introduction" ui-sref-active="active">Introduction</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.philosophy" ui-sref-active="active">Philosophy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.whyNgbJs" ui-sref-active="active">Why ngb-js</a>
                </li>
            </ul>
        </section>

        <section aria-labelledby="components-navigation-title">
            <h2 id="components-navigation-title" class="small fw-semibold text-uppercase text-body-secondary px-2 mb-2">
                Components
            </h2>

            <ul class="nav nav-pills flex-column gap-1">
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.accordion" ui-sref-active="active">Accordion</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.alert" ui-sref-active="active">Alert</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.carousel" ui-sref-active="active">Carousel</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.collapse" ui-sref-active="active">Collapse</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.datepicker" ui-sref-active="active">Datepicker</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.dropdown" ui-sref-active="active">Dropdown</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.modal" ui-sref-active="active">Modal</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.nav" ui-sref-active="active">Nav</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.offcanvas" ui-sref-active="active">Offcanvas</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.pagination" ui-sref-active="active">Pagination</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.popover" ui-sref-active="active">Popover</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.progressbar" ui-sref-active="active">Progress bar</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.rating" ui-sref-active="active">Rating</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.scrollspy" ui-sref-active="active">Scrollspy</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.timepicker" ui-sref-active="active">Timepicker</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.toast" ui-sref-active="active">Toast</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.tooltip" ui-sref-active="active">Tooltip</a></li>
                <li class="nav-item"><a class="nav-link rounded-2 px-2 py-1" ui-sref="docs.dashboard.typeahead" ui-sref-active="active">Typeahead</a></li>
            </ul>
        </section>
    </nav>
</ng-template>

<div class="h-100 d-flex flex-column bg-body" ng-if="$.mode === 'mobile'">
    <div class="offcanvas-header border-bottom px-4 py-3">
        <div>
            <h2 id="docs-mobile-menu-title" class="offcanvas-title h5 mb-0">Documentation</h2>
            <p class="small text-body-secondary mb-0">ngb-js</p>
        </div>

        <button
            type="button"
            class="btn-close"
            aria-label="Close menu"
            ng-click="$.ngbActiveOffcanvas.dismiss('Cross click')">
        </button>
    </div>

    <div class="offcanvas-body overflow-y-auto p-2">
        <ng-container ng-template-outlet="menuContent"></ng-container>
    </div>
</div>

<aside class="d-none d-lg-block w-100 h-100 py-3" ng-if="$.mode === 'desktop'">
    <ng-container ng-template-outlet="menuContent"></ng-container>
</aside>
`),e.put(`src/app/core/layouts/components/footer/footer.component.html`,`<footer class="border-top bg-body-tertiary">
    <div class="container-xl px-3 px-md-4 px-xl-5 py-4">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xxl-8 text-center">
                <a class="d-inline-flex align-items-center justify-content-center gap-2 fw-semibold text-body text-decoration-none mb-2" ui-sref="docs.home">
                    <span class="d-inline-flex align-items-center justify-content-center rounded-2 bg-primary text-white p-2">
                        <i class="bi bi-braces" aria-hidden="true"></i>
                    </span>
                    <span>ngb-js</span>
                </a>
                <p class="small text-body-secondary mb-0">
                    An independent AngularJS port. Not affiliated with or endorsed by the ng-bootstrap team.
                </p>

                <hr class="mx-auto my-3" style="max-width: 4rem;">

                <div class="small text-body-secondary">
                    <p class="mb-2">
                        Portions of the code are derived from
                        <a href="https://github.com/ng-bootstrap/ng-bootstrap" target="_blank" rel="noopener noreferrer">ng-bootstrap</a>
                        under the
                        <a href="https://github.com/ng-bootstrap/ng-bootstrap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
                    </p>
                    <p class="mb-0">
                        Portions of this documentation are adapted from the
                        <a href="https://ng-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">ng-bootstrap documentation</a>
                        under
                        <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>.
                        Changes were made for AngularJS and NgbJS.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
`)}]);