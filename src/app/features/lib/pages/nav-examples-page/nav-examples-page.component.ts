import type {IComponentController, IComponentOptions} from "angular";

export class NavExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsNavExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/nav-examples-page/nav-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
