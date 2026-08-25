import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class TooltipAutocloseComponent implements IComponentController {
    public contentTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsTooltipAutoclose" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipAutocloseComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.html" }
    }
}
