import type {IComponentController, IComponentOptions} from "angular";

export class DropdownExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsDropdownExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
