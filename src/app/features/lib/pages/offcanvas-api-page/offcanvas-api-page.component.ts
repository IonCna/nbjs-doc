import type {IComponentController, IComponentOptions} from "angular";

export class OffcanvasApiPageComponent implements IComponentController {
    static get $name() {
        return "docsOffcanvasApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasApiPageComponent,
            templateUrl: "./offcanvas-api-page.component.html",
            controllerAs: "$",
        }
    }
}
