import "@/features/lib/components/rating-custom-template/rating-custom-template.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class RatingCustomTemplateComponent implements IComponentController {
    public rating = 6;
    public setRating(rating: number) { this.rating = rating; }
    static get $name() { return "docsRatingCustomTemplate" }
    static get $factory(): IComponentOptions {
        return { controller: RatingCustomTemplateComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/rating-custom-template/rating-custom-template.component.html" }
    }
}
