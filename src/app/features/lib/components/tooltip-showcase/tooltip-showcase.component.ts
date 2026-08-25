import type { IComponentController, IComponentOptions } from "angular";

export class TooltipShowcaseComponent implements IComponentController {
    public disabled = false;
    static get $name() { return "docsTooltipShowcase" }
    static get $factory(): IComponentOptions {
        return { controller: TooltipShowcaseComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/tooltip-showcase/tooltip-showcase.component.html" }
    }
}
