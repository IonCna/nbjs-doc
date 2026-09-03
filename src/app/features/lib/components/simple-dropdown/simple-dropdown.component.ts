import type { IComponentController, IComponentOptions } from "angular";

export class SimpleDropdownComponent implements IComponentController {
    static get $name() {
        return "docsSimpleDropdown"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleDropdownComponent,
            controllerAs: "example",
            templateUrl: "./simple-dropdown.component.html",
        }
    }
}
