import type {IComponentController, IComponentOptions} from "angular";

export class CarouselApiPageComponent implements IComponentController {
    static get $name() {
        return "docsCarouselApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselApiPageComponent,
            templateUrl: "./carousel-api-page.component.html", styleUrl: "./carousel-api-page.component.css",
            controllerAs: "$",
        }
    }
}
