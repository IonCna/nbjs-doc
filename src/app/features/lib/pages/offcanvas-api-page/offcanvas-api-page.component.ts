import type {IComponentController, IComponentOptions} from "angular";

export class OffcanvasApiPageComponent implements IComponentController {
    static get $name() {
        return "docsOffcanvasApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasApiPageComponent,
            templateUrl: "src/app/features/lib/pages/offcanvas-api-page/offcanvas-api-page.component.html",
            controllerAs: "$",
        }
    }
}
