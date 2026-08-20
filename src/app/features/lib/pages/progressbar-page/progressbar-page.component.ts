import type {IComponentController, IComponentOptions} from "angular";

export class ProgressbarPageComponent implements IComponentController {
    static get $name() {
        return "docsProgressbarPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarPageComponent,
            templateUrl: "/src/app/features/lib/pages/progressbar-page/progressbar-page.component.html",
            controllerAs: "$",
        }
    }
}
