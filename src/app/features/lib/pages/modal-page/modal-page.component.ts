import type {IComponentController, IComponentOptions} from "angular";

export class ModalPageComponent implements IComponentController {
    static get $name() {
        return "docsModalPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalPageComponent,
            templateUrl: "/src/app/features/lib/pages/modal-page/modal-page.component.html",
            controllerAs: "$",
        }
    }
}
