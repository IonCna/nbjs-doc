import type { IComponentController, IComponentOptions } from "angular";
import type { NgbTimeStruct } from "ngb-js";

export class MeridianTimepickerComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    public meridian = true;
    static get $name() { return "docsMeridianTimepicker" }
    static get $factory(): IComponentOptions {
        return { controller: MeridianTimepickerComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/meridian-timepicker/meridian-timepicker.component.html" }
    }
}
