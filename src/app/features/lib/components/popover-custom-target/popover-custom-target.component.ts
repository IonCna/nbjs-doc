import type { IComponentController, IComponentOptions } from "angular";

export class PopoverCustomTargetComponent implements IComponentController {
    static get $name() { return "docsPopoverCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverCustomTargetComponent, controllerAs: "example", templateUrl: "./popover-custom-target.component.html", styleUrl: "./popover-custom-target.component.css" }
    }
}
