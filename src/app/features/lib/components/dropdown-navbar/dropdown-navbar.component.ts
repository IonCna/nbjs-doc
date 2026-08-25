import type { IComponentController, IComponentOptions } from "angular";

export class DropdownNavbarComponent implements IComponentController {
    static get $name() {
        return "docsDropdownNavbar"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownNavbarComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/dropdown-navbar/dropdown-navbar.component.html",
        }
    }
}
