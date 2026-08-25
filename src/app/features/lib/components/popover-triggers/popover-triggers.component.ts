import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverTriggersComponent implements IComponentController {
    public manual?: NgbPopover;
    static get $name() { return "docsPopoverTriggers" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverTriggersComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-triggers/popover-triggers.component.html" }
    }
}
