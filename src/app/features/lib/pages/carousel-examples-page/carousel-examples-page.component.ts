import type {IComponentController, IComponentOptions} from "angular";

export class CarouselExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsCarouselExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/carousel-examples-page/carousel-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
