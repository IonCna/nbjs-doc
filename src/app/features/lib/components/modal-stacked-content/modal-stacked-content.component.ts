import type { IComponentController, IComponentOptions } from "angular";
import { NgbModal, type NgbActiveModal } from "ngb-js";

export class ModalStackedContentComponent implements IComponentController {
    public ngbActiveModal!: NgbActiveModal;
    public level = 1;

    constructor(private readonly modal: NgbModal) {}

    public dismissAll() {
        this.modal.dismissAll("Dismiss all");
    }

    static get $name() {
        return "docsModalStackedContent"
    }

    static get $inject() {
        return [NgbModal.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                ngbActiveModal: "<",
                level: "<?",
            },
            controller: ModalStackedContentComponent,
            controllerAs: "$",
            templateUrl: "src/app/features/lib/components/modal-stacked-content/modal-stacked-content.component.html",
        }
    }
}
