import type {IComponentController, IComponentOptions} from "angular";

export class TooltipExamplesPageComponent implements IComponentController {
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
