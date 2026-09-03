import type {IComponentController, IComponentOptions} from "angular";

export class PaginationApiPageComponent implements IComponentController {
    static get $name() {
        return "docsPaginationApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationApiPageComponent,
            templateUrl: "./pagination-api-page.component.html", styleUrl: "./pagination-api-page.component.css",
            controllerAs: "$",
        }
    }
}
