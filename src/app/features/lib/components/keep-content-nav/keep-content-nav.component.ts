import type { IComponentController, IComponentOptions } from "angular";

export class KeepContentNavComponent implements IComponentController {
    public activeId = "keep-editor";
    public draft = "This value survives tab changes.";

    static get $name() {
        return "docsKeepContentNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: KeepContentNavComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/keep-content-nav/keep-content-nav.component.html",
        }
    }
}
