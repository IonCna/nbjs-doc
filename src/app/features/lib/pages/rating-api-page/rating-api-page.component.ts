import type {IComponentController, IComponentOptions} from "angular";

export class RatingApiPageComponent implements IComponentController {
    static get $name() {
        return "docsRatingApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: RatingApiPageComponent,
            templateUrl: "src/app/features/lib/pages/rating-api-page/rating-api-page.component.html",
            controllerAs: "$",
        }
    }
}
