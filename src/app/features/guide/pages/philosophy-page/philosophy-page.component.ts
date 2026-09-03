import type {IComponentController, IComponentOptions} from "angular";

export class PhilosophyPageComponent implements IComponentController {
    static get $name() {
        return "docsPhilosophyPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PhilosophyPageComponent,
            templateUrl: "./philosophy-page.component.html", styleUrl: "./philosophy-page.component.css",
            controllerAs: "$",
        }
    }
}
