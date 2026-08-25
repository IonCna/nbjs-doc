import type { IComponentController, IComponentOptions } from "angular";
import type { NgbDatepicker, NgbDateStruct } from "ngb-js";

export class DatepickerKeyboardComponent implements IComponentController {
    public date: NgbDateStruct = { year: 2026, month: 8, day: 24 };
    public datepicker?: NgbDatepicker;
    public onKeydown(event: KeyboardEvent | JQueryEventObject) {
        if (!this.datepicker || (event.key !== "[" && event.key !== "]")) return;
        const direction = event.key === "[" ? -1 : 1;
        const target = direction < 0
            ? this.datepicker.calendar.getPrev(this.datepicker.state.firstDate, "m", 1)
            : this.datepicker.calendar.getNext(this.datepicker.state.firstDate, "m", 1);
        this.datepicker.navigateTo(target);
        event.preventDefault();
        event.stopPropagation();
    }
    static get $name() { return "docsDatepickerKeyboard" }
    static get $factory(): IComponentOptions { return { controller: DatepickerKeyboardComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.html" } }
}
