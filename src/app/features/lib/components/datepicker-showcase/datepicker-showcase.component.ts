import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class DatepickerShowcaseComponent implements IComponentController {
    public inlineDate: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    public popupDate: NgbDateStruct = { year: 2026, month: 8, day: 24 };

    public markWeekend(date: NgbDateStruct) {
        const day = new Date(date.year, date.month - 1, date.day).getDay();
        return day === 0 || day === 6;
    }

    static get $name() { return "docsDatepickerShowcase" }
    static get $factory(): IComponentOptions {
        return { controller: DatepickerShowcaseComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/datepicker-showcase/datepicker-showcase.component.html" }
    }
}
