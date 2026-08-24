import type {IComponentController, IComponentOptions} from "angular";

export class ModalExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsModalExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/modal-examples-page/modal-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
