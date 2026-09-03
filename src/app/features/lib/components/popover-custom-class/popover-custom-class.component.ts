import type { IComponentController, IComponentOptions } from "angular";

export class PopoverCustomClassComponent implements IComponentController {
    static get $name() { return "docsPopoverCustomClass" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverCustomClassComponent, controllerAs: "example", templateUrl: "./popover-custom-class.component.html", styleUrl: "./popover-custom-class.component.css" }
    }
}
