import type {IComponentController, IComponentOptions} from "angular";

export class PhilosophyPageComponent implements IComponentController {
    static get $name() {
        return "docsPhilosophyPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PhilosophyPageComponent,
            templateUrl: "/src/app/features/guide/pages/philosophy-page/philosophy-page.component.html",
            controllerAs: "$",
        }
    }
}
