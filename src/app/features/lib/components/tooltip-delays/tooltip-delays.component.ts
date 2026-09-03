import type { IComponentController, IComponentOptions } from "angular";

export class TooltipDelaysComponent implements IComponentController {
    static get $name() { return "docsTooltipDelays" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipDelaysComponent, controllerAs: "example", templateUrl: "./tooltip-delays.component.html", styleUrl: "./tooltip-delays.component.css" }
    }
}
