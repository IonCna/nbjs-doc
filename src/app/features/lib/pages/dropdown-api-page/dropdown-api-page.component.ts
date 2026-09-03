import type {IComponentController, IComponentOptions} from "angular";

export class DropdownApiPageComponent implements IComponentController {
    static get $name() {
        return "docsDropdownApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownApiPageComponent,
            templateUrl: "./dropdown-api-page.component.html", styleUrl: "./dropdown-api-page.component.css",
            controllerAs: "$",
        }
    }
}
