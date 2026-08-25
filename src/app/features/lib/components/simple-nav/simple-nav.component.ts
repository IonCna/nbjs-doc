import type { IComponentController, IComponentOptions } from "angular";

export class SimpleNavComponent implements IComponentController {
    public activeId = "simple-overview";

    static get $name() {
        return "docsSimpleNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/simple-nav/simple-nav.component.html",
        }
    }
}
