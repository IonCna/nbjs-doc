import type {IComponentController, IComponentOptions} from "angular";

export class RatingApiPageComponent implements IComponentController {
    static get $name() {
        return "docsRatingApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: RatingApiPageComponent,
            templateUrl: "./rating-api-page.component.html", styleUrl: "./rating-api-page.component.css",
            controllerAs: "$",
        }
    }
}
