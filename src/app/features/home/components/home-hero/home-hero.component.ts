import type {IComponentController, IComponentOptions} from "angular";

export class HomeHeroComponent implements IComponentController {
    static get $name() {
        return "docsHomeHero"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HomeHeroComponent,
            templateUrl: "src/app/features/home/components/home-hero/home-hero.component.html",
        }
    }
}
