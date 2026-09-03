import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class TooltipTemplateComponent implements IComponentController {
    public name = "NgbJS";
    public contentTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsTooltipTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipTemplateComponent, controllerAs: "example", templateUrl: "./tooltip-template.component.html", styleUrl: "./tooltip-template.component.css" }
    }
}
