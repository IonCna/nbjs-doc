import type {IComponentOptions} from "angular";

export class AppComponent {
    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: AppComponent,
            template: "<ui-view></ui-view>"
        }
    }

    static get $name() {
        return "docsApp"
    }
}
