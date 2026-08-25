import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverAutocloseComponent implements IComponentController {
    public popover?: NgbPopover;
    static get $name() { return "docsPopoverAutoclose" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverAutocloseComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/popover-autoclose/popover-autoclose.component.html" }
    }
}
