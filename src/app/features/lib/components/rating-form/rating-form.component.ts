import type { IComponentController, IComponentOptions, IFormController } from "angular";

export class RatingFormComponent implements IComponentController {
    public rating: number | null = null;
    public disabled = false;
    public form?: IFormController;

    public setRating(rating: number) { this.rating = rating; }
    public clear() { this.rating = null; }

    static get $name() { return "docsRatingForm" }
    static get $factory(): IComponentOptions {
        return { controller: RatingFormComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/rating-form/rating-form.component.html" }
    }
}
