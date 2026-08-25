import type { IComponentController, IComponentOptions } from "angular";
import { NgbOffcanvas } from "ngb-js";
import { TemplateRef, ViewChild } from "ngjs-core";

export class OffcanvasDefaultComponent implements IComponentController {
    @ViewChild("content", { read: TemplateRef, static: true })
    private content!: TemplateRef<unknown>;

    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public open() {
        this.offcanvas.open(this.content);
    }

    static get $name() {
        return "docsOffcanvasDefault"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasDefaultComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/offcanvas-default/offcanvas-default.component.html",
        }
    }
}
