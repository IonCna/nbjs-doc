import type { IComponentController, IComponentOptions } from "angular";

export class DropdownBodyComponent implements IComponentController {
    static get $name() {
        return "docsDropdownBody"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownBodyComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/dropdown-body/dropdown-body.component.html",
        }
    }
}
