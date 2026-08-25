import type { IComponentController, IComponentOptions } from "angular";

export class SimpleDropdownComponent implements IComponentController {
    static get $name() {
        return "docsSimpleDropdown"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleDropdownComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/simple-dropdown/simple-dropdown.component.html",
        }
    }
}
