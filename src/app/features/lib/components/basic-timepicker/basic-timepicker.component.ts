import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class BasicTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    static get $name() { return "docsBasicTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: BasicTimepickerComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/basic-timepicker/basic-timepicker.component.html" }
    }
}
