import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDateStruct } from "ngb-js";

export class BasicDatepickerComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    static get $name() { return "docsBasicDatepicker" }
    static get $factory(): IComponentOptions {
        return { controller: BasicDatepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/basic-datepicker/basic-datepicker.component.html" }
    }
}
