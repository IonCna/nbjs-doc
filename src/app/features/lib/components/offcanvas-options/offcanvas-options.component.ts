import "@/features/lib/components/offcanvas-options/offcanvas-options.component.css";
import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { NgbOffcanvas, type NgbOffcanvasOptions } from "ngb-js";

export class OffcanvasOptionsComponent implements IComponentController {
    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public openCustomPanel() {
        this.open({ panelClass: "offcanvas-panel-custom" });
    }

    public openStaticBackdrop() {
        this.open({
            backdrop: "static",
            backdropClass: "offcanvas-static-backdrop",
            keyboard: false,
        });
    }

    public openStart() {
        this.open({ position: "start" });
    }

    public openEnd() {
        this.open({ position: "end" });
    }

    public openTop() {
        this.open({ position: "top" });
    }

    public openBottom() {
        this.open({ position: "bottom" });
    }

    public openScrollableBody() {
        this.open({ scroll: true, backdrop: false });
    }

    private open(options: NgbOffcanvasOptions) {
        this.offcanvas.open(OffcanvasDemoContentComponent.$name, options);
    }

    static get $name() {
        return "docsOffcanvasOptions"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasOptionsComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/offcanvas-options/offcanvas-options.component.html",
        }
    }
}
