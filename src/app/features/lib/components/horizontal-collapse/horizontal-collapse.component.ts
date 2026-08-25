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
            templateUrl: "src/app/features/lib/components/horizontal-collapse/horizontal-collapse.component.html",
        }
    }
}
