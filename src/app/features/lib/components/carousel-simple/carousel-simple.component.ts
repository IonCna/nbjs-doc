import type { IComponentController, IComponentOptions } from "angular";

export class CarouselSimpleComponent implements IComponentController {
    static get $name() {
        return "docsCarouselSimple"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselSimpleComponent,
            controllerAs: "example",
            templateUrl: "./carousel-simple.component.html", styleUrl: "./carousel-simple.component.css",
        }
    }
}
