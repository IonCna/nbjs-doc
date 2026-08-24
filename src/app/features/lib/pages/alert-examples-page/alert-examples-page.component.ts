import type {IComponentController, IComponentOptions} from "angular";

export class AlertExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsAlertExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/alert-examples-page/alert-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
