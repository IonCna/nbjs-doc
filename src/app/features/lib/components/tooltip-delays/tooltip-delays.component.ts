import type { IComponentController, IComponentOptions } from "angular";

export class TooltipDelaysComponent implements IComponentController {
    static get $name() { return "docsTooltipDelays" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipDelaysComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/tooltip-delays/tooltip-delays.component.html" }
    }
}
