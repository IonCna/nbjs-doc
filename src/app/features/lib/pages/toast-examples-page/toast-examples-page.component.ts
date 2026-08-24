import type {IComponentController, IComponentOptions} from "angular";

export class ToastExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsToastExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ToastExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/toast-examples-page/toast-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
