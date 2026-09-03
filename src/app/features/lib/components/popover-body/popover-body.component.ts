import type { IComponentController, IComponentOptions } from "angular";

export class PopoverBodyComponent implements IComponentController {
    static get $name() { return "docsPopoverBody" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverBodyComponent, controllerAs: "example", templateUrl: "./popover-body.component.html" }
    }
}
