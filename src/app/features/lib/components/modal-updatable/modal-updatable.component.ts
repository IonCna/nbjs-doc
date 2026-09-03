import type { IComponentController, IComponentOptions } from "angular";
import { ModalUpdatableContentComponent } from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component"
import { NgbModal } from "ngb-js";

export class ModalUpdatableComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public open() {
        this.modal.open(ModalUpdatableContentComponent.$name, {
            ariaLabelledBy: "updatable-modal-title",
            ariaDescribedBy: "updatable-modal-description",
            size: "sm",
        });
    }

    static get $name() {
        return "docsModalUpdatable"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalUpdatableComponent,
            controllerAs: "example",
            templateUrl: "./modal-updatable.component.html",
        }
    }
}
