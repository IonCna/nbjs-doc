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
            templateUrl: "./simple-nav.component.html", styleUrl: "./simple-nav.component.css",
        }
    }
}
