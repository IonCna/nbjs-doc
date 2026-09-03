import type {IComponentController, IComponentOptions} from "angular";

export class NavApiPageComponent implements IComponentController {
    static get $name() {
        return "docsNavApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavApiPageComponent,
            templateUrl: "./nav-api-page.component.html", styleUrl: "./nav-api-page.component.css",
            controllerAs: "$",
        }
    }
}
