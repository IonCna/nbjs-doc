import type { IComponentController, IComponentOptions } from "angular";
import type { NgbPopover } from "ngb-js";

export class PopoverEventsComponent implements IComponentController {
    public popover?: NgbPopover;
    public events: { name: string; time: Date }[] = [];
    public record(name: string) { this.events.unshift({ name, time: new Date() }); }
    static get $name() { return "docsPopoverEvents" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverEventsComponent, controllerAs: "example", templateUrl: "./popover-events.component.html" }
    }
}
