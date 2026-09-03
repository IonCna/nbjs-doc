import type { IComponentController, IComponentOptions } from "angular";

export class PopoverDelaysComponent implements IComponentController {
    static get $name() { return "docsPopoverDelays" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverDelaysComponent, controllerAs: "example", templateUrl: "./popover-delays.component.html", styleUrl: "./popover-delays.component.css" }
    }
}
