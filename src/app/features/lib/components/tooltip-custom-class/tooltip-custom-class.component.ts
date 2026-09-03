import type { IComponentController, IComponentOptions } from "angular";

export class TooltipCustomClassComponent implements IComponentController {
    static get $name() { return "docsTooltipCustomClass" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipCustomClassComponent, controllerAs: "example", templateUrl: "./tooltip-custom-class.component.html", styleUrl: "./tooltip-custom-class.component.css" }
    }
}
