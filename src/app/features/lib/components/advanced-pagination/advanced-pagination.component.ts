import type { IComponentController, IComponentOptions } from "angular";

export class AdvancedPaginationComponent implements IComponentController {
    public paginatedPage = 7;
    public rotatedPage = 12;
    public compactPage = 12;

    public selectPaginatedPage(page: number) { this.paginatedPage = page; }
    public selectRotatedPage(page: number) { this.rotatedPage = page; }
    public selectCompactPage(page: number) { this.compactPage = page; }

    static get $name() {
        return "docsAdvancedPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AdvancedPaginationComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/advanced-pagination/advanced-pagination.component.html",
        }
    }
}
