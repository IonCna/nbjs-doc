import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTooltip } from "ngb-js";

export class TooltipTriggersComponent implements IComponentController {
    public manual?: NgbTooltip;
    static get $name() { return "docsTooltipTriggers" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipTriggersComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/tooltip-triggers/tooltip-triggers.component.html" }
    }
}
