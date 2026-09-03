import type { IComponentController, IComponentOptions } from "angular";

export class NavbarScrollspyComponent implements IComponentController {
    static get $name() { return "docsNavbarScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: NavbarScrollspyComponent,
            controllerAs: "example",
            templateUrl: "./navbar-scrollspy.component.html",
        }
    }
}
