import type {IComponentController, IComponentOptions} from "angular";

export class AlertApiPageComponent implements IComponentController {
    static get $name() {
        return "docsAlertApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertApiPageComponent,
            templateUrl: "src/app/features/lib/pages/alert-api-page/alert-api-page.component.html",
            controllerAs: "$",
        }
    }
}
