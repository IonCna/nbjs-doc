import type {IComponentController, IComponentOptions} from "angular";

export class NavPageComponent implements IComponentController {
    static get $name() {
        return "docsNavPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavPageComponent,
            templateUrl: "/src/app/features/lib/pages/nav-page/nav-page.component.html",
            controllerAs: "$",
        }
    }
}
