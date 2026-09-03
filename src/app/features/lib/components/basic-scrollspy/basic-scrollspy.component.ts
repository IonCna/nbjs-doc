import type { IComponentController, IComponentOptions } from "angular";

export class BasicScrollspyComponent implements IComponentController {
    static get $name() { return "docsBasicScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: BasicScrollspyComponent,
            controllerAs: "example",
            templateUrl: "./basic-scrollspy.component.html",
        }
    }
}
