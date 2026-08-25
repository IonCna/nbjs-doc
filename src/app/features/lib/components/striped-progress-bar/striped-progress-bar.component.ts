import type { IComponentController, IComponentOptions } from "angular";

export class StripedProgressBarComponent implements IComponentController {
    static get $name() { return "docsStripedProgressBar" }
    static get $factory(): IComponentOptions {
        return { controller: StripedProgressBarComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/striped-progress-bar/striped-progress-bar.component.html" }
    }
}
