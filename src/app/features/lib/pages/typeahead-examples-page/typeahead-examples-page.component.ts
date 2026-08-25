import type {IComponentController, IComponentOptions} from "angular";
import showcaseHtml from "@/features/lib/components/typeahead-showcase/typeahead-showcase.component.html?raw"
import showcaseTs from "@/features/lib/components/typeahead-showcase/typeahead-showcase.component.ts?raw"

export class TypeaheadExamplesPageComponent implements IComponentController {
    public readonly example = { html: showcaseHtml, typescript: showcaseTs }
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
