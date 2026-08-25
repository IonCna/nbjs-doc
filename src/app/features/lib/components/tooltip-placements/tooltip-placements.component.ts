import type { IComponentController, IComponentOptions } from "angular";

export class TooltipPlacementsComponent implements IComponentController {
    static get $name() { return "docsTooltipPlacements" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipPlacementsComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/tooltip-placements/tooltip-placements.component.html" }
    }
}
