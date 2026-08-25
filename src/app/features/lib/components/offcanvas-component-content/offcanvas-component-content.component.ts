import type { IComponentController, IComponentOptions } from "angular";
import { OffcanvasDemoContentComponent } from "@/features/lib/components/offcanvas-demo-content/offcanvas-demo-content.component"
import { NgbOffcanvas } from "ngb-js";

export class OffcanvasComponentContentComponent implements IComponentController {
    public lastResult = "No result yet";

    constructor(private readonly offcanvas: NgbOffcanvas) {}

    public async open() {
        const offcanvasRef = await this.offcanvas.open(OffcanvasDemoContentComponent.$name);

        offcanvasRef.closed.subscribe((result) => {
            this.lastResult = `Closed with: ${result}`;
        });

        offcanvasRef.dismissed.subscribe((reason) => {
            this.lastResult = `Dismissed with: ${reason}`;
        });
    }

    static get $name() {
        return "docsOffcanvasComponentContent"
    }

    static get $inject() {
        return [NgbOffcanvas.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OffcanvasComponentContentComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/offcanvas-component-content/offcanvas-component-content.component.html",
        }
    }
}
