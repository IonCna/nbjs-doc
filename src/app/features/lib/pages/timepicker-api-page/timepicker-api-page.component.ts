import type {IComponentController, IComponentOptions} from "angular";

export class TimepickerApiPageComponent implements IComponentController {
    static get $name() {
        return "docsTimepickerApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TimepickerApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/timepicker-api-page/timepicker-api-page.component.html",
            controllerAs: "$",
        }
    }
}
