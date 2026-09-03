import type { IComponentController, IComponentOptions } from "angular";

export class SimpleProgressbarComponent implements IComponentController {
    static get $name() { return "docsSimpleProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: SimpleProgressbarComponent, controllerAs: "example", templateUrl: "./simple-progressbar.component.html", styleUrl: "./simple-progressbar.component.css" }
    }
}
