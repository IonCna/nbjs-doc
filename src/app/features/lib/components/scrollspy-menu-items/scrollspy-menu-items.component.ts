import type { IComponentController, IComponentOptions } from "angular";

export class ScrollspyMenuItemsComponent implements IComponentController {
    static get $name() { return "docsScrollspyMenuItems" }
    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyMenuItemsComponent,
            controllerAs: "example",
            templateUrl: "./scrollspy-menu-items.component.html",
        }
    }
}
