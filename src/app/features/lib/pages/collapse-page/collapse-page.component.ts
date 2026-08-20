import type {IComponentController, IComponentOptions} from "angular";

export class CollapsePageComponent implements IComponentController {
    static get $name() {
        return "docsCollapsePage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CollapsePageComponent,
            templateUrl: "/src/app/features/lib/pages/collapse-page/collapse-page.component.html",
            controllerAs: "$",
        }
    }
}
