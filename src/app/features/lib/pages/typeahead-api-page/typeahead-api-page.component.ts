import type {IComponentController, IComponentOptions} from "angular";

export class TypeaheadApiPageComponent implements IComponentController {
    static get $name() {
        return "docsTypeaheadApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TypeaheadApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/typeahead-api-page/typeahead-api-page.component.html",
            controllerAs: "$",
        }
    }
}
