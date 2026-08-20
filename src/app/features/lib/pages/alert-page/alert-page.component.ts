import type {IComponentController, IComponentOptions} from "angular";

export class AlertPageComponent implements IComponentController {
    static get $name() {
        return "docsAlertPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertPageComponent,
            templateUrl: "/src/app/features/lib/pages/alert-page/alert-page.component.html",
            controllerAs: "$",
        }
    }
}
