import type {IComponentController, IComponentOptions} from "angular";
import showcaseHtml from "@/features/lib/components/datepicker-showcase/datepicker-showcase.component.html?raw"
import showcaseTs from "@/features/lib/components/datepicker-showcase/datepicker-showcase.component.ts?raw"

export class DatepickerExamplesPageComponent implements IComponentController {
    public readonly example = { html: showcaseHtml, typescript: showcaseTs }
    static get $name() {
        return "docsDatepickerExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DatepickerExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
