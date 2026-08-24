import type {IComponentController, IComponentOptions} from "angular";

export class RatingExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsRatingExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: RatingExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/rating-examples-page/rating-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
