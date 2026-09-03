import type { IComponentController, IComponentOptions } from "angular";

export class DropdownDisabledItemsComponent implements IComponentController {
    public restricted = true;

    static get $name() {
        return "docsDropdownDisabledItems"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownDisabledItemsComponent,
            controllerAs: "example",
            templateUrl: "./dropdown-disabled-items.component.html",
        }
    }
}
