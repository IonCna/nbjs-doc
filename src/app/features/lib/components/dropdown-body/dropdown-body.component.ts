import type { IComponentController, IComponentOptions } from "angular";

export class DropdownBodyComponent implements IComponentController {
    static get $name() {
        return "docsDropdownBody"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownBodyComponent,
            controllerAs: "example",
            templateUrl: "./dropdown-body.component.html", styleUrl: "./dropdown-body.component.css",
        }
    }
}
