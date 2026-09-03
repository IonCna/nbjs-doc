import type {IComponentOptions} from "angular";

export class MenuAbstractPageComponent {
    static get $name() {
        return "docsMenuAbstractPageComponent"
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: MenuAbstractPageComponent,
            templateUrl: "./menu-abstract-page.component.html"
        }
    }
}