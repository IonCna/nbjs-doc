import type { IComponentController, IComponentOptions } from "angular";

export class ProgressBarsStackedComponent implements IComponentController {
    static get $name() { return "docsProgressBarsStacked" }
    static get $factory(): IComponentOptions {
        return { controller: ProgressBarsStackedComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html" }
    }
}
