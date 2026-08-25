import type { IComponentController, IComponentOptions } from "angular";
import { NgbTimepickerI18n, type NgbTimeStruct } from "ngb-js";

export class GreekTimepickerI18n extends NgbTimepickerI18n {
    public getMorningPeriod(): string { return "π.μ."; }
    public getAfternoonPeriod(): string { return "μ.μ."; }
}

// Register once in your application module:
// AppModule.service(NgbTimepickerI18n.$name, GreekTimepickerI18n);

export class TimepickerI18nComponent implements IComponentController {
    public time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
    constructor(public readonly i18n: NgbTimepickerI18n) {}
    static get $name() { return "docsTimepickerI18n" }
    static get $inject() { return [NgbTimepickerI18n.$name] }
    static get $factory(): IComponentOptions {
        return { controller: TimepickerI18nComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/timepicker-i18n/timepicker-i18n.component.html" }
    }
}
