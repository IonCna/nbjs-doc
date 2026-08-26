import type {IComponentController, IComponentOptions} from "angular";
import carouselControlsTs from "@/features/lib/components/carousel-controls/carousel-controls.component.ts?raw"
import carouselGlobalTs from "@/features/lib/components/carousel-global/carousel-global.component.ts?raw"
import { CarouselControlsComponent } from "@/features/lib/components/carousel-controls/carousel-controls.component"
import { CarouselGlobalComponent } from "@/features/lib/components/carousel-global/carousel-global.component"
import { CarouselKeyboardComponent } from "@/features/lib/components/carousel-keyboard/carousel-keyboard.component"
import { CarouselSimpleComponent } from "@/features/lib/components/carousel-simple/carousel-simple.component"

export class CarouselExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: CarouselSimpleComponent.$factory.templateUrl,
        },
        keyboard: {
            html: CarouselKeyboardComponent.$factory.templateUrl,
        },
        controls: {
            html: CarouselControlsComponent.$factory.templateUrl,
            typescript: carouselControlsTs,
        },
        global: {
            html: CarouselGlobalComponent.$factory.templateUrl,
            typescript: carouselGlobalTs,
        },
    }

    static get $name() {
        return "docsCarouselExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/carousel-examples-page/carousel-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
