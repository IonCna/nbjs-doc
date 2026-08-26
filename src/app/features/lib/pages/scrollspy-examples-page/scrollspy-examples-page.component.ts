import type {IComponentController, IComponentOptions} from "angular";
import serviceTs from "@/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component.ts?raw"
import { BasicScrollspyComponent } from "@/features/lib/components/basic-scrollspy/basic-scrollspy.component"
import { NavbarScrollspyComponent } from "@/features/lib/components/navbar-scrollspy/navbar-scrollspy.component"
import { NestedScrollspyComponent } from "@/features/lib/components/nested-scrollspy/nested-scrollspy.component"
import { ScrollspyMenuItemsComponent } from "@/features/lib/components/scrollspy-menu-items/scrollspy-menu-items.component"
import { ScrollspyServiceDemoComponent } from "@/features/lib/components/scrollspy-service-demo/scrollspy-service-demo.component"

export class ScrollspyExamplesPageComponent implements IComponentController {
    public readonly examples = {
        basic: { html: BasicScrollspyComponent.$factory.templateUrl },
        menuItems: { html: ScrollspyMenuItemsComponent.$factory.templateUrl },
        nested: { html: NestedScrollspyComponent.$factory.templateUrl },
        navbar: { html: NavbarScrollspyComponent.$factory.templateUrl },
        service: { html: ScrollspyServiceDemoComponent.$factory.templateUrl, typescript: serviceTs },
    }
    static get $name() {
        return "docsScrollspyExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
