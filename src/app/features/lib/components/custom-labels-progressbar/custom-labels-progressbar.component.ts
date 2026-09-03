import type { IComponentController, IComponentOptions } from "angular";

export class CustomLabelsProgressbarComponent implements IComponentController {
    static get $name() { return "docsCustomLabelsProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: CustomLabelsProgressbarComponent, controllerAs: "example", templateUrl: "./custom-labels-progressbar.component.html", styleUrl: "./custom-labels-progressbar.component.css" }
    }
}
