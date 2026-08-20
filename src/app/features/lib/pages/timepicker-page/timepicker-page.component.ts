import type {IComponentController, IComponentOptions} from "angular";

export class TimepickerPageComponent implements IComponentController {
    static get $name() {
        return "docsTimepickerPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TimepickerPageComponent,
            templateUrl: "/src/app/features/lib/pages/timepicker-page/timepicker-page.component.html",
            controllerAs: "$",
        }
    }
}
