import type { IAugmentedJQuery, IComponentController, IComponentOptions, ITimeoutService } from "angular";

interface CarouselController {
    cycle(): void;
    pause(): void;
}

interface CarouselSlideEvent {
    source?: "timer" | "arrowLeft" | "arrowRight" | "indicator";
}

export class CarouselControlsComponent implements IComponentController {
    public pauseOnHover = true;
    public pauseOnFocus = true;
    public unpauseOnArrow = false;
    public pauseOnIndicator = false;
    public paused = false;

    private carousel?: CarouselController;

    constructor(
        private readonly $element: IAugmentedJQuery,
        private readonly $timeout: ITimeoutService,
    ) {}

    public $postLink() {
        this.$timeout(
            () => {
                this.carousel = this.$element.find("ngb-carousel").controller("ngbCarousel") as CarouselController;
            },
            0,
            false,
        );
    }

    public onSlide(event: CarouselSlideEvent) {
        const isArrow = event.source === "arrowLeft" || event.source === "arrowRight";

        if (isArrow && this.unpauseOnArrow) {
            this.carousel?.cycle();
            this.paused = false;
        }

        if (event.source === "indicator" && this.pauseOnIndicator) {
            this.carousel?.pause();
            this.paused = true;
        }
    }

    public toggleCycle() {
        if (this.paused) {
            this.carousel?.cycle();
        } else {
            this.carousel?.pause();
        }

        this.paused = !this.paused;
    }

    static get $name() {
        return "docsCarouselControls"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CarouselControlsComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/carousel-controls/carousel-controls.component.html",
        }
    }

    static get $inject() {
        return ["$element", "$timeout"]
    }
}
