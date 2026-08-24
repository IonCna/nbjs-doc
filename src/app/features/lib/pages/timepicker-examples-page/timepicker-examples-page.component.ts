import type {IComponentController, IComponentOptions} from "angular";

export class TimepickerExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsTimepickerExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TimepickerExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
