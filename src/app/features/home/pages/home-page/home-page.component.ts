import type {IComponentController, IComponentOptions} from "angular";

export class HomePageComponent implements IComponentController {
    readonly installCommand = "npm install ngb-js"

    static get $name() {
        return "docsHomePage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HomePageComponent,
            templateUrl: "src/app/features/home/pages/home-page/home-page.component.html",
            controllerAs: "$",
        }
    }

}
