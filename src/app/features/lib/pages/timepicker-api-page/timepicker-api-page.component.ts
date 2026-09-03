import type {IComponentController, IComponentOptions} from "angular";

export class TimepickerApiPageComponent implements IComponentController {
    static get $name() {
        return "docsTimepickerApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TimepickerApiPageComponent,
            templateUrl: "./timepicker-api-page.component.html", styleUrl: "./timepicker-api-page.component.css",
            controllerAs: "$",
        }
    }
}
