import type { IComponentController, IComponentOptions } from "angular";

export class DisabledPaginationComponent implements IComponentController {
    public page = 3;
    public disabled = true;

    public selectPage(page: number) {
        this.page = page;
    }

    static get $name() {
        return "docsDisabledPagination"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DisabledPaginationComponent,
            controllerAs: "example",
            templateUrl: "./disabled-pagination.component.html", styleUrl: "./disabled-pagination.component.css",
        }
    }
}
