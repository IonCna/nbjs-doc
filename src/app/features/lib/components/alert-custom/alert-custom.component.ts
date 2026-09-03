import type { IComponentController, IComponentOptions } from "angular";

export class AlertCustomComponent implements IComponentController {
    static get $name() {
        return "docsAlertCustom"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertCustomComponent,
            controllerAs: "example",
            templateUrl: "./alert-custom.component.html",
            styleUrl: "./alert-custom.component.css",
        }
    }
}
