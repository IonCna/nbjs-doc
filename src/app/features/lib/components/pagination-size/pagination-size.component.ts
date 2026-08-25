import type { IComponentController, IComponentOptions } from "angular";

export class PaginationSizeComponent implements IComponentController {
    public smallPage = 2;
    public defaultPage = 2;
    public largePage = 2;

    public selectSmallPage(page: number) { this.smallPage = page; }
    public selectDefaultPage(page: number) { this.defaultPage = page; }
    public selectLargePage(page: number) { this.largePage = page; }

    static get $name() {
        return "docsPaginationSize"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationSizeComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/pagination-size/pagination-size.component.html",
        }
    }
}
