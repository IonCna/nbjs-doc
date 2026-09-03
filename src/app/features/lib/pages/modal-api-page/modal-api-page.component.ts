import type {IComponentController, IComponentOptions} from "angular";

export class ModalApiPageComponent implements IComponentController {
    static get $name() {
        return "docsModalApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalApiPageComponent,
            templateUrl: "./modal-api-page.component.html",
            controllerAs: "$",
        }
    }
}
