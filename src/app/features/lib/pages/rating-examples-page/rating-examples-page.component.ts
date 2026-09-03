import type {IComponentController, IComponentOptions} from "angular";
import basicTs from "@/features/lib/components/basic-rating/basic-rating.component.ts?raw"
import customTemplateCss from "@/features/lib/components/rating-custom-template/rating-custom-template.component.css?raw"
import customTemplateTs from "@/features/lib/components/rating-custom-template/rating-custom-template.component.ts?raw"
import decimalCss from "@/features/lib/components/rating-decimal/rating-decimal.component.css?raw"
import decimalTs from "@/features/lib/components/rating-decimal/rating-decimal.component.ts?raw"
import eventsTs from "@/features/lib/components/rating-events/rating-events.component.ts?raw"
import formTs from "@/features/lib/components/rating-form/rating-form.component.ts?raw"
import globalTs from "@/features/lib/components/rating-global/rating-global.component.ts?raw"
import { BasicRatingComponent } from "@/features/lib/components/basic-rating/basic-rating.component"
import { RatingCustomTemplateComponent } from "@/features/lib/components/rating-custom-template/rating-custom-template.component"
import { RatingDecimalComponent } from "@/features/lib/components/rating-decimal/rating-decimal.component"
import { RatingEventsComponent } from "@/features/lib/components/rating-events/rating-events.component"
import { RatingFormComponent } from "@/features/lib/components/rating-form/rating-form.component"
import { RatingGlobalComponent } from "@/features/lib/components/rating-global/rating-global.component"

export class RatingExamplesPageComponent implements IComponentController {
    public readonly examples = {
        basic: { html: BasicRatingComponent.$factory.templateUrl, typescript: basicTs },
        events: { html: RatingEventsComponent.$factory.templateUrl, typescript: eventsTs },
        customTemplate: { html: RatingCustomTemplateComponent.$factory.templateUrl, typescript: customTemplateTs, css: customTemplateCss },
        decimal: { html: RatingDecimalComponent.$factory.templateUrl, typescript: decimalTs, css: decimalCss },
        form: { html: RatingFormComponent.$factory.templateUrl, typescript: formTs },
        global: { html: RatingGlobalComponent.$factory.templateUrl, typescript: globalTs },
    }
    static get $name() {
        return "docsRatingExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: RatingExamplesPageComponent,
            templateUrl: "./rating-examples-page.component.html", styleUrl: "./rating-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
