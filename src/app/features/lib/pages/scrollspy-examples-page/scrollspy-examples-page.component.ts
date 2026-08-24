import type {IComponentController, IComponentOptions} from "angular";

export class ScrollspyExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsScrollspyExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
