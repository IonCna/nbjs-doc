import type {IComponentController, IComponentOptions} from "angular";

export class ProgressbarApiPageComponent implements IComponentController {
    static get $name() {
        return "docsProgressbarApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/progressbar-api-page/progressbar-api-page.component.html",
            controllerAs: "$",
        }
    }
}
