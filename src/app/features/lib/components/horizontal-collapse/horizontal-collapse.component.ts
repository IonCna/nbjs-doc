import type { IComponentController, IComponentOptions } from "angular";

export class HorizontalCollapseComponent implements IComponentController {
    public collapsed = true;

    public toggle() {
        this.collapsed = !this.collapsed;
    }

    static get $name() {
        return "docsHorizontalCollapse"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HorizontalCollapseComponent,
            controllerAs: "example",
            templateUrl: "./horizontal-collapse.component.html",
        }
    }
}
