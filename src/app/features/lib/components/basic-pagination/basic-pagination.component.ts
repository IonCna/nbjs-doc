import type { IComponentController, IComponentOptions } from "angular";

export class BasicPaginationComponent implements IComponentController {
    public page = 4;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsBasicPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: BasicPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/basic-pagination/basic-pagination.component.html",
        }
    }
}
