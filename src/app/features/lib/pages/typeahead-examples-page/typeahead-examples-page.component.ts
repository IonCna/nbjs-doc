import type {IComponentController, IComponentOptions} from "angular";
import exactTs from "@/features/lib/components/exact-typeahead/exact-typeahead.component.ts?raw"
import focusTs from "@/features/lib/components/focus-typeahead/focus-typeahead.component.ts?raw"
import formattedTs from "@/features/lib/components/formatted-typeahead/formatted-typeahead.component.ts?raw"
import globalTs from "@/features/lib/components/typeahead-global/typeahead-global.component.ts?raw"
import nonEditableTs from "@/features/lib/components/non-editable-typeahead/non-editable-typeahead.component.ts?raw"
import simpleTs from "@/features/lib/components/simple-typeahead/simple-typeahead.component.ts?raw"
import templateResultsTs from "@/features/lib/components/template-results-typeahead/template-results-typeahead.component.ts?raw"
import wikipediaTs from "@/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.ts?raw"
import { ExactTypeaheadComponent } from "@/features/lib/components/exact-typeahead/exact-typeahead.component"
import { FocusTypeaheadComponent } from "@/features/lib/components/focus-typeahead/focus-typeahead.component"
import { FormattedTypeaheadComponent } from "@/features/lib/components/formatted-typeahead/formatted-typeahead.component"
import { NonEditableTypeaheadComponent } from "@/features/lib/components/non-editable-typeahead/non-editable-typeahead.component"
import { SimpleTypeaheadComponent } from "@/features/lib/components/simple-typeahead/simple-typeahead.component"
import { TemplateResultsTypeaheadComponent } from "@/features/lib/components/template-results-typeahead/template-results-typeahead.component"
import { TypeaheadGlobalComponent } from "@/features/lib/components/typeahead-global/typeahead-global.component"
import { WikipediaTypeaheadComponent } from "@/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component"

export class TypeaheadExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: { html: SimpleTypeaheadComponent.$factory.templateUrl, typescript: simpleTs },
        focus: { html: FocusTypeaheadComponent.$factory.templateUrl, typescript: focusTs },
        formatted: { html: FormattedTypeaheadComponent.$factory.templateUrl, typescript: formattedTs },
        exact: { html: ExactTypeaheadComponent.$factory.templateUrl, typescript: exactTs },
        wikipedia: { html: WikipediaTypeaheadComponent.$factory.templateUrl, typescript: wikipediaTs },
        templateResults: { html: TemplateResultsTypeaheadComponent.$factory.templateUrl, typescript: templateResultsTs },
        nonEditable: { html: NonEditableTypeaheadComponent.$factory.templateUrl, typescript: nonEditableTs },
        global: { html: TypeaheadGlobalComponent.$factory.templateUrl, typescript: globalTs },
    }
    static get $name() {
        return "docsTypeaheadExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TypeaheadExamplesPageComponent,
            templateUrl: "./typeahead-examples-page.component.html", styleUrl: "./typeahead-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
