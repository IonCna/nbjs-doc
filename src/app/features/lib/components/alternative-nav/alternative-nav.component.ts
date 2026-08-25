import type { IComponentController, IComponentOptions } from "angular";

export class AlternativeNavComponent implements IComponentController {
    public activeId = "alternative-home";

    static get $name() {
        return "docsAlternativeNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlternativeNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/alternative-nav/alternative-nav.component.html",
        }
    }
}
