import type {IComponentController, IComponentOptions} from "angular";

export class DatepickerExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsDatepickerExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DatepickerExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
