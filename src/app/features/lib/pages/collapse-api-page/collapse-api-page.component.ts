import type {IComponentController, IComponentOptions} from "angular";

export class CollapseApiPageComponent implements IComponentController {
    static get $name() {
        return "docsCollapseApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CollapseApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/collapse-api-page/collapse-api-page.component.html",
            controllerAs: "$",
        }
    }
}
