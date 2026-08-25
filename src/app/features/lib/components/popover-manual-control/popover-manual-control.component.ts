import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverManualControlComponent implements IComponentController {
    public popover?: NgbPopover;
    static get $name() { return "docsPopoverManualControl" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverManualControlComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/popover-manual-control/popover-manual-control.component.html" }
    }
}
