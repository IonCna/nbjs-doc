import "@/features/lib/components/rating-decimal/rating-decimal.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import type { TemplateRef } from "ngjs-core";

export class RatingDecimalComponent implements IComponentController {
    public rating = 3.14;
    public heartTemplate?: TemplateRef<unknown>;
    public readonly ariaValueText = (current: number, max: number) => `${current} out of ${max} hearts`;
    static get $name() { return "docsRatingDecimal" }
    static get $factory(): IComponentOptions {
        return { controller: RatingDecimalComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-decimal/rating-decimal.component.html" }
    }
}
