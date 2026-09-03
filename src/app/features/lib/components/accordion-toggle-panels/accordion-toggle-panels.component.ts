import type { IComponentController, IComponentOptions } from "angular";
import { ViewChild } from "ngjs-core";

interface AccordionController {
    expandAll(): void;
    collapseAll(): void;
    toggle(itemId: string): void;
}

export class AccordionTogglePanelsComponent implements IComponentController {
    @ViewChild("accordion", { static: true })
    private accordion!: AccordionController;

    public expandAll() {
        this.accordion.expandAll();
    }

    public collapseAll() {
        this.accordion.collapseAll();
    }

    public toggle(itemId: string) {
        this.accordion.toggle(itemId);
    }

    static get $name() {
        return "docsAccordionTogglePanels"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionTogglePanelsComponent,
            controllerAs: "example",
            templateUrl: "./accordion-toggle-panels.component.html",
        }
    }
}
