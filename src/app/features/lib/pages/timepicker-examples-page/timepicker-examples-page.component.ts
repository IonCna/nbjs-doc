import type {IComponentController, IComponentOptions} from "angular";
import adapterTs from "@/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component.ts?raw"
import basicTs from "@/features/lib/components/basic-timepicker/basic-timepicker.component.ts?raw"
import i18nTs from "@/features/lib/components/timepicker-i18n/timepicker-i18n.component.ts?raw"
import meridianTs from "@/features/lib/components/meridian-timepicker/meridian-timepicker.component.ts?raw"
import secondsTs from "@/features/lib/components/seconds-timepicker/seconds-timepicker.component.ts?raw"
import spinnersTs from "@/features/lib/components/spinners-timepicker/spinners-timepicker.component.ts?raw"
import stepsTs from "@/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component.ts?raw"
import validationTs from "@/features/lib/components/timepicker-validation/timepicker-validation.component.ts?raw"
import { BasicTimepickerComponent } from "@/features/lib/components/basic-timepicker/basic-timepicker.component"
import { TimepickerI18nComponent } from "@/features/lib/components/timepicker-i18n/timepicker-i18n.component"
import { MeridianTimepickerComponent } from "@/features/lib/components/meridian-timepicker/meridian-timepicker.component"
import { TimepickerCustomAdapterComponent } from "@/features/lib/components/timepicker-custom-adapter/timepicker-custom-adapter.component"
import { SecondsTimepickerComponent } from "@/features/lib/components/seconds-timepicker/seconds-timepicker.component"
import { SpinnersTimepickerComponent } from "@/features/lib/components/spinners-timepicker/spinners-timepicker.component"
import { TimepickerCustomStepsComponent } from "@/features/lib/components/timepicker-custom-steps/timepicker-custom-steps.component"
import { TimepickerValidationComponent } from "@/features/lib/components/timepicker-validation/timepicker-validation.component"

export class TimepickerExamplesPageComponent implements IComponentController {
    public readonly examples = {
        basic: { html: BasicTimepickerComponent.$factory.templateUrl, typescript: basicTs },
        meridian: { html: MeridianTimepickerComponent.$factory.templateUrl, typescript: meridianTs },
        seconds: { html: SecondsTimepickerComponent.$factory.templateUrl, typescript: secondsTs },
        spinners: { html: SpinnersTimepickerComponent.$factory.templateUrl, typescript: spinnersTs },
        steps: { html: TimepickerCustomStepsComponent.$factory.templateUrl, typescript: stepsTs },
        validation: { html: TimepickerValidationComponent.$factory.templateUrl, typescript: validationTs },
        adapter: { html: TimepickerCustomAdapterComponent.$factory.templateUrl, typescript: adapterTs },
        i18n: { html: TimepickerI18nComponent.$factory.templateUrl, typescript: i18nTs },
    }
    static get $name() {
        return "docsTimepickerExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TimepickerExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
