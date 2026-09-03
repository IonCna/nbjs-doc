import type {IComponentController, IComponentOptions} from "angular";

export class ScrollspyApiPageComponent implements IComponentController {
    static get $name() {
        return "docsScrollspyApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyApiPageComponent,
            templateUrl: "./scrollspy-api-page.component.html", styleUrl: "./scrollspy-api-page.component.css",
            controllerAs: "$",
        }
    }
}
