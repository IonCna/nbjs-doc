import type { IComponentController, IComponentOptions } from "angular";

export class NestedScrollspyComponent implements IComponentController {
    static get $name() { return "docsNestedScrollspy" }
    static get $factory(): IComponentOptions {
        return {
            controller: NestedScrollspyComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/nested-scrollspy/nested-scrollspy.component.html",
        }
    }
}
