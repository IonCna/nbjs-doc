import type { IComponentController, IComponentOptions } from "angular";

export class DropdownButtonGroupsComponent implements IComponentController {
    static get $name() {
        return "docsDropdownButtonGroups"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownButtonGroupsComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/dropdown-button-groups/dropdown-button-groups.component.html",
        }
    }
}
