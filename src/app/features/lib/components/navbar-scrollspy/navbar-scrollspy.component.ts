import type { IComponentController, IComponentOptions } from "angular";

export class NavbarScrollspyComponent implements IComponentController {
    static get $name() { return "docsNavbarScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: NavbarScrollspyComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/navbar-scrollspy/navbar-scrollspy.component.html",
        }
    }
}
