import type { IComponentController, IComponentOptions } from "angular";

export class TooltipBodyComponent implements IComponentController {
    static get $name() { return "docsTooltipBody" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipBodyComponent, controllerAs: "example", templateUrl: "./tooltip-body.component.html", styleUrl: "./tooltip-body.component.css" }
    }
}
