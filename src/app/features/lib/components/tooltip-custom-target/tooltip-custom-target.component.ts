import type { IComponentController, IComponentOptions } from "angular";

export class TooltipCustomTargetComponent implements IComponentController {
    static get $name() { return "docsTooltipCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipCustomTargetComponent, controllerAs: "example", templateUrl: "./tooltip-custom-target.component.html", styleUrl: "./tooltip-custom-target.component.css" }
    }
}
