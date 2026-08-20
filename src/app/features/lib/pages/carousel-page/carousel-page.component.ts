import type {IComponentController, IComponentOptions} from "angular";

export class CarouselPageComponent implements IComponentController {
    static get $name() {
        return "docsCarouselPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselPageComponent,
            templateUrl: "/src/app/features/lib/pages/carousel-page/carousel-page.component.html",
            controllerAs: "$",
        }
    }
}
