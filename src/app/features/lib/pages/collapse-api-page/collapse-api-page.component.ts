import type {IComponentController, IComponentOptions} from "angular";

export class CollapseApiPageComponent implements IComponentController {
    static get $name() {
        return "docsCollapseApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CollapseApiPageComponent,
            templateUrl: "./collapse-api-page.component.html", styleUrl: "./collapse-api-page.component.css",
            controllerAs: "$",
        }
    }
}
