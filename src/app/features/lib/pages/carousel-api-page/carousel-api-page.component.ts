import type {IComponentController, IComponentOptions} from "angular";

export class CarouselApiPageComponent implements IComponentController {
    static get $name() {
        return "docsCarouselApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/carousel-api-page/carousel-api-page.component.html",
            controllerAs: "$",
        }
    }
}
