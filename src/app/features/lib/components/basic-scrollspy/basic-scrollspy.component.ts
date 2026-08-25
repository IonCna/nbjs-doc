import type { IComponentController, IComponentOptions } from "angular";

export class BasicScrollspyComponent implements IComponentController {
    static get $name() { return "docsBasicScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: BasicScrollspyComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/basic-scrollspy/basic-scrollspy.component.html",
        }
    }
}
