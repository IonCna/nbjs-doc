import type {IComponentOptions} from "angular";

export class MenuAbstractPageComponent {
    static get $name() {
        return "docsMenuAbstractPageComponent"
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: MenuAbstractPageComponent,
            templateUrl: "src/app/core/layouts/pages/menu-abstract-page/menu-abstract-page.component.html"
        }
    }
}