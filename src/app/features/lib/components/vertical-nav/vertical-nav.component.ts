import type { IComponentController, IComponentOptions } from "angular";

export class VerticalNavComponent implements IComponentController {
    public activeId = "vertical-profile";

    static get $name() {
        return "docsVerticalNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: VerticalNavComponent,
            controllerAs: "example",
            templateUrl: "./vertical-nav.component.html", styleUrl: "./vertical-nav.component.css",
        }
    }
}
