import type {IComponentController, IComponentOptions} from "angular";
import showcaseHtml from "@/features/lib/components/tooltip-showcase/tooltip-showcase.component.html?raw"
import showcaseTs from "@/features/lib/components/tooltip-showcase/tooltip-showcase.component.ts?raw"

export class TooltipExamplesPageComponent implements IComponentController {
    public readonly example = { html: showcaseHtml, typescript: showcaseTs }
    static get $name() {
        return "docsTooltipExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TooltipExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/tooltip-examples-page/tooltip-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
