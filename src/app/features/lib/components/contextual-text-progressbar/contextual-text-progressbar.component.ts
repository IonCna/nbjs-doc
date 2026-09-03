import type { IComponentController, IComponentOptions } from "angular";

export class ContextualTextProgressbarComponent implements IComponentController {
    static get $name() { return "docsContextualTextProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: ContextualTextProgressbarComponent, controllerAs: "example", templateUrl: "./contextual-text-progressbar.component.html", styleUrl: "./contextual-text-progressbar.component.css" }
    }
}
