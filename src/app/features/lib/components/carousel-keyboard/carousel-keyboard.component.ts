import type { IComponentController, IComponentOptions } from "angular";

export class CarouselKeyboardComponent implements IComponentController {
    static get $name() {
        return "docsCarouselKeyboard"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselKeyboardComponent,
            controllerAs: "example",
            templateUrl: "./carousel-keyboard.component.html", styleUrl: "./carousel-keyboard.component.css",
        }
    }
}
