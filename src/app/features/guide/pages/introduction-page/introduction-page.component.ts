import type {IComponentController, IComponentOptions} from "angular";

export class IntroductionPageComponent implements IComponentController {
    static get $name() {
        return "docsIntroductionPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: IntroductionPageComponent,
            templateUrl: "/src/app/features/guide/pages/introduction-page/introduction-page.component.html",
            controllerAs: "$",
        }
    }
}
