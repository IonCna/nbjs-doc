import type {IComponentController, IComponentOptions} from "angular";

export class OffcanvasExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsOffcanvasExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
