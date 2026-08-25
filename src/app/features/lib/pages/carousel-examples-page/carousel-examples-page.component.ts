import type {IComponentController, IComponentOptions} from "angular";
import carouselControlsHtml from "@/features/lib/components/carousel-controls/carousel-controls.component.html?raw"
import carouselControlsTs from "@/features/lib/components/carousel-controls/carousel-controls.component.ts?raw"
import carouselGlobalHtml from "@/features/lib/components/carousel-global/carousel-global.component.html?raw"
import carouselGlobalTs from "@/features/lib/components/carousel-global/carousel-global.component.ts?raw"
import carouselKeyboardHtml from "@/features/lib/components/carousel-keyboard/carousel-keyboard.component.html?raw"
import carouselSimpleHtml from "@/features/lib/components/carousel-simple/carousel-simple.component.html?raw"

export class CarouselExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: carouselSimpleHtml,
        },
        keyboard: {
            html: carouselKeyboardHtml,
        },
        controls: {
            html: carouselControlsHtml,
            typescript: carouselControlsTs,
        },
        global: {
            html: carouselGlobalHtml,
            typescript: carouselGlobalTs,
        },
    }

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
