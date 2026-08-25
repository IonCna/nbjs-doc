import type { IComponentController, IComponentOptions } from "angular";

export class CustomPaginationComponent implements IComponentController {
    public page = 3;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsCustomPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CustomPaginationComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/custom-pagination/custom-pagination.component.html",
        }
    }
}
