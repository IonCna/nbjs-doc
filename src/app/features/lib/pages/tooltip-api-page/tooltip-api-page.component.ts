import type {IComponentController, IComponentOptions} from "angular";

export class TooltipApiPageComponent implements IComponentController {
    static get $name() {
        return "docsTooltipApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TooltipApiPageComponent,
            templateUrl: "./tooltip-api-page.component.html",
            controllerAs: "$",
        }
    }
}
