import type {IComponentController, IComponentOptions} from "angular";
import brandIconUrl from "@/assets/brand/ngb-js-icon.png"

export class HomeHeroComponent implements IComponentController {
    public readonly brandIconUrl = brandIconUrl

    static get $name() {
        return "docsHomeHero"
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: HomeHeroComponent,
            templateUrl: "./home-hero.component.html",
            styleUrl: "./home-hero.component.css",
        }
    }
}
