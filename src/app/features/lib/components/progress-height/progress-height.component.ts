import type { IComponentController, IComponentOptions } from "angular";

export class ProgressHeightComponent implements IComponentController {
    static get $name() { return "docsProgressHeight" }
    static get $factory(): IComponentOptions {
        return { controller: ProgressHeightComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/progress-height/progress-height.component.html" }
    }
}
