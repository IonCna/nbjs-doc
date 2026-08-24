import type {IComponentController, IComponentOptions} from "angular";

export class TypeaheadExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsTypeaheadExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TypeaheadExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/typeahead-examples-page/typeahead-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
