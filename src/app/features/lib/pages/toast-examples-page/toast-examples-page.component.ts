import type {IComponentController, IComponentOptions} from "angular";
import showcaseHtml from "@/features/lib/components/toast-showcase/toast-showcase.component.html?raw"
import showcaseTs from "@/features/lib/components/toast-showcase/toast-showcase.component.ts?raw"

export class ToastExamplesPageComponent implements IComponentController {
    public readonly example = { html: showcaseHtml, typescript: showcaseTs }
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
