import type {IComponentController, IComponentOptions} from "angular";

export class ToastApiPageComponent implements IComponentController {
    static get $name() {
        return "docsToastApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ToastApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/toast-api-page/toast-api-page.component.html",
            controllerAs: "$",
        }
    }
}
