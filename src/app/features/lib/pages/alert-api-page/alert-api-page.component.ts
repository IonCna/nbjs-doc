import type {IComponentController, IComponentOptions} from "angular";

export class AlertApiPageComponent implements IComponentController {
    static get $name() {
        return "docsAlertApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertApiPageComponent,
            templateUrl: "./alert-api-page.component.html",
            controllerAs: "$",
        }
    }
}
