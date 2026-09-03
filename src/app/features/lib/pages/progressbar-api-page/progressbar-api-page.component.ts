import type {IComponentController, IComponentOptions} from "angular";

export class ProgressbarApiPageComponent implements IComponentController {
    static get $name() {
        return "docsProgressbarApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarApiPageComponent,
            templateUrl: "./progressbar-api-page.component.html", styleUrl: "./progressbar-api-page.component.css",
            controllerAs: "$",
        }
    }
}
