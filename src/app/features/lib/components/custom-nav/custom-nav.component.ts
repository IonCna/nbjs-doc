import type { IComponentController, IComponentOptions } from "angular";

export class CustomNavComponent implements IComponentController {
    public activeId = "custom-weekly";

    static get $name() {
        return "docsCustomNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CustomNavComponent,
            controllerAs: "example",
            templateUrl: "./custom-nav.component.html",
            styleUrl: "./custom-nav.component.css",
        }
    }
}
