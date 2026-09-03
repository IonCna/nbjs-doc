import type { IComponentController, IComponentOptions } from "angular";

export class StripedProgressBarComponent implements IComponentController {
    static get $name() { return "docsStripedProgressBar" }
    static get $factory(): IComponentOptions {
        return { controller: StripedProgressBarComponent, controllerAs: "example", templateUrl: "./striped-progress-bar.component.html" }
    }
}
