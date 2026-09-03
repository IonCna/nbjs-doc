import type {IComponentController, IComponentOptions} from "angular";

export class TypeaheadApiPageComponent implements IComponentController {
    static get $name() {
        return "docsTypeaheadApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TypeaheadApiPageComponent,
            templateUrl: "./typeahead-api-page.component.html",
            controllerAs: "$",
        }
    }
}
