import type { IComponentController, IComponentOptions } from "angular";
import { ModalFocusContentComponent } from "@/features/lib/components/modal-focus-content/modal-focus-content.component"
import { NgbModal } from "ngb-js";

export class ModalFocusComponent implements IComponentController {
    constructor(private readonly modal: NgbModal) {}

    public openDefaultFocus() {
        this.modal.open(ModalFocusContentComponent.$name, {
            ariaLabelledBy: "modal-focus-title",
            bindings: { autofocus: false },
        });
    }

    public openCustomFocus() {
        this.modal.open(ModalFocusContentComponent.$name, {
            ariaLabelledBy: "modal-focus-title",
            bindings: { autofocus: true },
        });
    }

    static get $name() {
        return "docsModalFocus"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalFocusComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/modal-focus/modal-focus.component.html",
        }
    }
}
