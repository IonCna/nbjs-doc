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
            templateUrl: "src/app/features/lib/components/vertical-nav/vertical-nav.component.html",
        }
    }
}
