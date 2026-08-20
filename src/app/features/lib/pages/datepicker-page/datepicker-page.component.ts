import type {IComponentController, IComponentOptions} from "angular";

export class DatepickerPageComponent implements IComponentController {
    static get $name() {
        return "docsDatepickerPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DatepickerPageComponent,
            templateUrl: "/src/app/features/lib/pages/datepicker-page/datepicker-page.component.html",
            controllerAs: "$",
        }
    }
}
