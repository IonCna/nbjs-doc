import type { IComponentController, IComponentOptions } from "angular";

export class PopoverCustomTargetComponent implements IComponentController {
    static get $name() { return "docsPopoverCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverCustomTargetComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-custom-target/popover-custom-target.component.html" }
    }
}
