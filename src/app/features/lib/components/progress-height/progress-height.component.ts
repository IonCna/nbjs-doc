import type { IComponentController, IComponentOptions } from "angular";

export class ProgressHeightComponent implements IComponentController {
    static get $name() { return "docsProgressHeight" }
    static get $factory(): IComponentOptions {
        return { controller: ProgressHeightComponent, controllerAs: "example", templateUrl: "./progress-height.component.html" }
    }
}
