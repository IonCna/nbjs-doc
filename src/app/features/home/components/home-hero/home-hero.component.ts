import type {IComponentController, IComponentOptions} from "angular";

export class HomeHeroComponent implements IComponentController {
    static get $name() {
        return "docsHomeHero"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HomeHeroComponent,
            templateUrl: "./home-hero.component.html",
        }
    }
}
