import type { IComponentController, IComponentOptions } from "angular";

export class TooltipCustomTargetComponent implements IComponentController {
    static get $name() { return "docsTooltipCustomTarget" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipCustomTargetComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.html" }
    }
}
