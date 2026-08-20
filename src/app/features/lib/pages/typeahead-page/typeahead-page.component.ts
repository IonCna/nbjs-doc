import type {IComponentController, IComponentOptions} from "angular";

export class TypeaheadPageComponent implements IComponentController {
    static get $name() {
        return "docsTypeaheadPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TypeaheadPageComponent,
            templateUrl: "/src/app/features/lib/pages/typeahead-page/typeahead-page.component.html",
            controllerAs: "$",
        }
    }
}
