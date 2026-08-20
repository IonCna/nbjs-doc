import type {IComponentController, IComponentOptions} from "angular";

export class ScrollspyPageComponent implements IComponentController {
    static get $name() {
        return "docsScrollspyPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ScrollspyPageComponent,
            templateUrl: "/src/app/features/lib/pages/scrollspy-page/scrollspy-page.component.html",
            controllerAs: "$",
        }
    }
}
