import type {IComponentController, IComponentOptions} from "angular";

export class TooltipPageComponent implements IComponentController {
    static get $name() {
        return "docsTooltipPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TooltipPageComponent,
            templateUrl: "/src/app/features/lib/pages/tooltip-page/tooltip-page.component.html",
            controllerAs: "$",
        }
    }
}
