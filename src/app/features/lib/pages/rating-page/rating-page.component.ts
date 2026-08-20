import type {IComponentController, IComponentOptions} from "angular";

export class RatingPageComponent implements IComponentController {
    static get $name() {
        return "docsRatingPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: RatingPageComponent,
            templateUrl: "/src/app/features/lib/pages/rating-page/rating-page.component.html",
            controllerAs: "$",
        }
    }
}
