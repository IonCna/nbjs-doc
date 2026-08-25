import type { IComponentController, IComponentOptions } from "angular";

export class SimpleProgressbarComponent implements IComponentController {
    static get $name() { return "docsSimpleProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: SimpleProgressbarComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/simple-progressbar/simple-progressbar.component.html" }
    }
}
