import type { IComponentController, IComponentOptions } from "angular";
import adapterTs from "@/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component.ts?raw"
import basicTs from "@/features/lib/components/basic-datepicker/basic-datepicker.component.ts?raw"
import customDayCss from "@/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.css?raw"
import customDayTs from "@/features/lib/components/datepicker-custom-day/datepicker-custom-day.component.ts?raw"
import customMonthCss from "@/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.css?raw"
import customMonthTs from "@/features/lib/components/datepicker-custom-month/datepicker-custom-month.component.ts?raw"
import disabledTs from "@/features/lib/components/disabled-datepicker/disabled-datepicker.component.ts?raw"
import footerTs from "@/features/lib/components/datepicker-footer/datepicker-footer.component.ts?raw"
import globalTs from "@/features/lib/components/datepicker-global/datepicker-global.component.ts?raw"
import i18nTs from "@/features/lib/components/datepicker-i18n/datepicker-i18n.component.ts?raw"
import keyboardTs from "@/features/lib/components/datepicker-keyboard/datepicker-keyboard.component.ts?raw"
import multipleTs from "@/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component.ts?raw"
import popupTs from "@/features/lib/components/popup-datepicker/popup-datepicker.component.ts?raw"
import positionTs from "@/features/lib/components/datepicker-position-target/datepicker-position-target.component.ts?raw"
import rangeCss from "@/features/lib/components/range-datepicker/range-datepicker.component.css?raw"
import rangeTs from "@/features/lib/components/range-datepicker/range-datepicker.component.ts?raw"
import rangePopupCss from "@/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.css?raw"
import rangePopupTs from "@/features/lib/components/range-popup-datepicker/range-popup-datepicker.component.ts?raw"
import { BasicDatepickerComponent } from "@/features/lib/components/basic-datepicker/basic-datepicker.component"
import { DatepickerCustomAdapterComponent } from "@/features/lib/components/datepicker-custom-adapter/datepicker-custom-adapter.component"
import { DatepickerCustomDayComponent } from "@/features/lib/components/datepicker-custom-day/datepicker-custom-day.component"
import { DatepickerCustomMonthComponent } from "@/features/lib/components/datepicker-custom-month/datepicker-custom-month.component"
import { DatepickerFooterComponent } from "@/features/lib/components/datepicker-footer/datepicker-footer.component"
import { DatepickerGlobalComponent } from "@/features/lib/components/datepicker-global/datepicker-global.component"
import { DatepickerI18nComponent } from "@/features/lib/components/datepicker-i18n/datepicker-i18n.component"
import { DatepickerKeyboardComponent } from "@/features/lib/components/datepicker-keyboard/datepicker-keyboard.component"
import { DatepickerPositionTargetComponent } from "@/features/lib/components/datepicker-position-target/datepicker-position-target.component"
import { DisabledDatepickerComponent } from "@/features/lib/components/disabled-datepicker/disabled-datepicker.component"
import { MultipleMonthsDatepickerComponent } from "@/features/lib/components/multiple-months-datepicker/multiple-months-datepicker.component"
import { PopupDatepickerComponent } from "@/features/lib/components/popup-datepicker/popup-datepicker.component"
import { RangeDatepickerComponent } from "@/features/lib/components/range-datepicker/range-datepicker.component"
import { RangePopupDatepickerComponent } from "@/features/lib/components/range-popup-datepicker/range-popup-datepicker.component"

export class DatepickerExamplesPageComponent implements IComponentController {
    public readonly examples = {
        basic: { html: BasicDatepickerComponent.$factory.templateUrl, typescript: basicTs }, popup: { html: PopupDatepickerComponent.$factory.templateUrl, typescript: popupTs },
        multiple: { html: MultipleMonthsDatepickerComponent.$factory.templateUrl, typescript: multipleTs }, range: { html: RangeDatepickerComponent.$factory.templateUrl, typescript: rangeTs, css: rangeCss },
        rangePopup: { html: RangePopupDatepickerComponent.$factory.templateUrl, typescript: rangePopupTs, css: rangePopupCss }, disabled: { html: DisabledDatepickerComponent.$factory.templateUrl, typescript: disabledTs },
        adapter: { html: DatepickerCustomAdapterComponent.$factory.templateUrl, typescript: adapterTs }, i18n: { html: DatepickerI18nComponent.$factory.templateUrl, typescript: i18nTs },
        customDay: { html: DatepickerCustomDayComponent.$factory.templateUrl, typescript: customDayTs, css: customDayCss }, customMonth: { html: DatepickerCustomMonthComponent.$factory.templateUrl, typescript: customMonthTs, css: customMonthCss },
        footer: { html: DatepickerFooterComponent.$factory.templateUrl, typescript: footerTs }, position: { html: DatepickerPositionTargetComponent.$factory.templateUrl, typescript: positionTs },
        keyboard: { html: DatepickerKeyboardComponent.$factory.templateUrl, typescript: keyboardTs }, global: { html: DatepickerGlobalComponent.$factory.templateUrl, typescript: globalTs },
    };
    static get $name() { return "docsDatepickerExamplesPage" }
    static get $factory(): IComponentOptions { return { controller: DatepickerExamplesPageComponent, controllerAs: "$", templateUrl: "./datepicker-examples-page.component.html", styleUrl: "./datepicker-examples-page.component.css" } }
}
