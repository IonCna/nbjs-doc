import type { IComponentController, IComponentOptions } from "angular";

export class PaginationAlignmentComponent implements IComponentController {
    public startPage = 2;
    public centerPage = 2;
    public endPage = 2;

    public selectStartPage(page: number) { this.startPage = page; }
    public selectCenterPage(page: number) { this.centerPage = page; }
    public selectEndPage(page: number) { this.endPage = page; }

    static get $name() {
        return "docsPaginationAlignment"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationAlignmentComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/pagination-alignment/pagination-alignment.component.html",
        }
    }
}
