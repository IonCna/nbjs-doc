import type { IComponentController, IComponentOptions } from "angular";

export class SimpleAlertComponent implements IComponentController {
    static get $name() {
        return "docsSimpleAlert"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: SimpleAlertComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/simple-alert/simple-alert.component.html",
        }
    }
}
