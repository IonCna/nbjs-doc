import type {IComponentController, IComponentOptions} from "angular";

export class DatepickerApiPageComponent implements IComponentController {
    static get $name() {
        return "docsDatepickerApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DatepickerApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/datepicker-api-page/datepicker-api-page.component.html",
            controllerAs: "$",
        }
    }
}
