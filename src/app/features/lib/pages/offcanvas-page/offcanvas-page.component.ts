import type {IComponentController, IComponentOptions} from "angular";

export class OffcanvasPageComponent implements IComponentController {
    static get $name() {
        return "docsOffcanvasPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasPageComponent,
            templateUrl: "/src/app/features/lib/pages/offcanvas-page/offcanvas-page.component.html",
            controllerAs: "$",
        }
    }
}
