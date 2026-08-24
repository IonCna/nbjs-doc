import type {IComponentController, IComponentOptions} from "angular";

export class DropdownApiPageComponent implements IComponentController {
    static get $name() {
        return "docsDropdownApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/dropdown-api-page/dropdown-api-page.component.html",
            controllerAs: "$",
        }
    }
}
