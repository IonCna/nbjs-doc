import type {IComponentController, IComponentOptions} from "angular";

export class DropdownPageComponent implements IComponentController {
    static get $name() {
        return "docsDropdownPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownPageComponent,
            templateUrl: "/src/app/features/lib/pages/dropdown-page/dropdown-page.component.html",
            controllerAs: "$",
        }
    }
}
