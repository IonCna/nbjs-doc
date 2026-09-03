import type { IComponentController, IComponentOptions } from "angular";

export class TooltipPlacementsComponent implements IComponentController {
    static get $name() { return "docsTooltipPlacements" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipPlacementsComponent, controllerAs: "example", templateUrl: "./tooltip-placements.component.html" }
    }
}
