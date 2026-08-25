import type {IComponentController, IComponentOptions} from "angular";

export class WhyNgbJsPageComponent implements IComponentController {
    static get $name() {
        return "docsWhyNgbJsPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: WhyNgbJsPageComponent,
            templateUrl: "src/app/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component.html",
            controllerAs: "$",
        }
    }
}
