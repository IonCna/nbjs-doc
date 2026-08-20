import type {IComponentController, IComponentOptions} from "angular";

export class PaginationPageComponent implements IComponentController {
    static get $name() {
        return "docsPaginationPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationPageComponent,
            templateUrl: "/src/app/features/lib/pages/pagination-page/pagination-page.component.html",
            controllerAs: "$",
        }
    }
}
