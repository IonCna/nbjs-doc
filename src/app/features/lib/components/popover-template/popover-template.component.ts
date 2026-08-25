import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class PopoverTemplateComponent implements IComponentController {
    public name = "NgbJS";
    public contentTemplate?: TemplateRef<unknown>;
    public titleTemplate?: TemplateRef<unknown>;
    static get $name() { return "docsPopoverTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverTemplateComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/popover-template/popover-template.component.html" }
    }
}
