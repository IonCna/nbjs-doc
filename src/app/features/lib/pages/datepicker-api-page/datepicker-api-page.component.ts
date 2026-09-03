import type {IComponentController, IComponentOptions} from "angular";

export class DatepickerApiPageComponent implements IComponentController {
    static get $name() {
        return "docsDatepickerApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DatepickerApiPageComponent,
            templateUrl: "./datepicker-api-page.component.html", styleUrl: "./datepicker-api-page.component.css",
            controllerAs: "$",
        }
    }
}
