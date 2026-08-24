import type {IComponentController, IComponentOptions} from "angular";

export class ProgressbarExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsProgressbarExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
