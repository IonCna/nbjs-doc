import type {IComponentController, IComponentOptions} from "angular";
import offcanvasComponentContentTs from "@/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.ts?raw"
import offcanvasDefaultTs from "@/features/lib/components/offcanvas-default/offcanvas-default.component.ts?raw"
import offcanvasDemoContentTs from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component.ts?raw"
import offcanvasFocusTs from "@/features/lib/components/offcanvas-focus/offcanvas-focus.component.ts?raw"
import offcanvasFocusContentTs from "@/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component.ts?raw"
import offcanvasGlobalTs from "@/features/lib/components/offcanvas-global/offcanvas-global.component.ts?raw"
import offcanvasOptionsCss from "@/features/lib/components/offcanvas-options/offcanvas-options.component.css?raw"
import offcanvasOptionsTs from "@/features/lib/components/offcanvas-options/offcanvas-options.component.ts?raw"
import { OffcanvasComponentContentComponent } from "@/features/lib/components/offcanvas-component-content/offcanvas-component-content.component"
import { OffcanvasDefaultComponent } from "@/features/lib/components/offcanvas-default/offcanvas-default.component"
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { OffcanvasFocusComponent } from "@/features/lib/components/offcanvas-focus/offcanvas-focus.component"
import { OffcanvasFocusContentComponent } from "@/features/lib/components/offcanvas-focus-content/offcanvas-focus-content.component"
import { OffcanvasGlobalComponent } from "@/features/lib/components/offcanvas-global/offcanvas-global.component"
import { OffcanvasOptionsComponent } from "@/features/lib/components/offcanvas-options/offcanvas-options.component"

export class OffcanvasExamplesPageComponent implements IComponentController {
    public readonly examples = {
        defaults: {
            html: OffcanvasDefaultComponent.$factory.templateUrl,
            typescript: offcanvasDefaultTs,
        },
        componentContent: {
            html: [
                { label: "offcanvas-component-content.component.html", url: OffcanvasComponentContentComponent.$factory.templateUrl },
                { label: "offcanvas-demo-content.component.html", url: OffcanvasDemoContentComponent.$factory.templateUrl },
            ],
            typescript: `${offcanvasComponentContentTs}\n\n// offcanvas-demo-content.component.ts\n${offcanvasDemoContentTs}`,
        },
        focus: {
            html: [
                { label: "offcanvas-focus.component.html", url: OffcanvasFocusComponent.$factory.templateUrl },
                { label: "offcanvas-focus-content.component.html", url: OffcanvasFocusContentComponent.$factory.templateUrl },
            ],
            typescript: `${offcanvasFocusTs}\n\n// offcanvas-focus-content.component.ts\n${offcanvasFocusContentTs}`,
        },
        options: {
            html: OffcanvasOptionsComponent.$factory.templateUrl,
            typescript: offcanvasOptionsTs,
            css: offcanvasOptionsCss,
        },
        global: {
            html: OffcanvasGlobalComponent.$factory.templateUrl,
            typescript: offcanvasGlobalTs,
        },
    }

    static get $name() {
        return "docsOffcanvasExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
