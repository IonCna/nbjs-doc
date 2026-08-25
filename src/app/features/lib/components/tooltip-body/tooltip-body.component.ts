import type { IComponentController, IComponentOptions } from "angular";

export class TooltipBodyComponent implements IComponentController {
    static get $name() { return "docsTooltipBody" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipBodyComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/tooltip-body/tooltip-body.component.html" }
    }
}
