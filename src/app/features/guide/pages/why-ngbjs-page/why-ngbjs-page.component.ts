import type {IComponentController, IComponentOptions} from "angular";

export class WhyNgbJsPageComponent implements IComponentController {
    static get $name() {
        return "docsWhyNgbJsPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: WhyNgbJsPageComponent,
            templateUrl: "./why-ngbjs-page.component.html", styleUrl: "./why-ngbjs-page.component.css",
            controllerAs: "$",
        }
    }
}
