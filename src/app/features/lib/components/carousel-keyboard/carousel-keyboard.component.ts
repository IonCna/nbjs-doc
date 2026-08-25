import type { IComponentController, IComponentOptions } from "angular";

export class CarouselKeyboardComponent implements IComponentController {
    static get $name() {
        return "docsCarouselKeyboard"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselKeyboardComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/carousel-keyboard/carousel-keyboard.component.html",
        }
    }
}
