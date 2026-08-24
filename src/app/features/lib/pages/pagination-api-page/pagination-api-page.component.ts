import type {IComponentController, IComponentOptions} from "angular";

export class PaginationApiPageComponent implements IComponentController {
    static get $name() {
        return "docsPaginationApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/pagination-api-page/pagination-api-page.component.html",
            controllerAs: "$",
        }
    }
}
