import type {IComponentController, IComponentOptions} from "angular";

export class PaginationExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsPaginationExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/pagination-examples-page/pagination-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
