import type {IComponentController, IComponentOptions} from "angular";

export class IntroductionPageComponent implements IComponentController {
    public activePackageManager = "npm"

    public readonly packageManagers = [
        { id: "npm", name: "npm", command: "npm install ngb-js" },
        { id: "pnpm", name: "pnpm", command: "pnpm add ngb-js" },
        { id: "yarn", name: "Yarn", command: "yarn add ngb-js" },
        { id: "bun", name: "Bun", command: "bun add ngb-js" },
    ]

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
