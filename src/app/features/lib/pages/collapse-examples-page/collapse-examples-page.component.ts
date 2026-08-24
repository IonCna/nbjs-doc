import type {IComponentController, IComponentOptions} from "angular";

export class CollapseExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsCollapseExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CollapseExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/collapse-examples-page/collapse-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
