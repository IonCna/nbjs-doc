import type {IComponentController, IComponentOptions} from "angular";

export class NavApiPageComponent implements IComponentController {
    static get $name() {
        return "docsNavApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/nav-api-page/nav-api-page.component.html",
            controllerAs: "$",
        }
    }
}
