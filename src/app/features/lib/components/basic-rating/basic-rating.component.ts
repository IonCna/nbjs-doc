import type { IComponentController, IComponentOptions } from "angular";

export class BasicRatingComponent implements IComponentController {
    public rating = 3;
    public setRating(rating: number) { this.rating = rating; }
    static get $name() { return "docsBasicRating" }
    static get $factory(): IComponentOptions {
        return { controller: BasicRatingComponent, controllerAs: "example", templateUrl: "./basic-rating.component.html", styleUrl: "./basic-rating.component.css" }
    }
}
