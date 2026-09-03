import type { IComponentController, IComponentOptions } from "angular";

export class NestedScrollspyComponent implements IComponentController {
    static get $name() { return "docsNestedScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: NestedScrollspyComponent,
            controllerAs: "example",
            templateUrl: "./nested-scrollspy.component.html",
        }
    }
}
