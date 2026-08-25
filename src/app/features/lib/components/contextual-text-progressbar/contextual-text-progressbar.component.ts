import type { IComponentController, IComponentOptions } from "angular";

export class ContextualTextProgressbarComponent implements IComponentController {
    static get $name() { return "docsContextualTextProgressbar" }
    static get $factory(): IComponentOptions {
        return { controller: ContextualTextProgressbarComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html" }
    }
}
