import type {IComponentController, IComponentOptions} from "angular";

export class ToastPageComponent implements IComponentController {
    static get $name() {
        return "docsToastPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ToastPageComponent,
            templateUrl: "/src/app/features/lib/pages/toast-page/toast-page.component.html",
            controllerAs: "$",
        }
    }
}
