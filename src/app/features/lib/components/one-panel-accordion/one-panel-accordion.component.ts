import type { IComponentController, IComponentOptions } from "angular";

export class OnePanelAccordionComponent implements IComponentController {
    static get $name() {
        return "docsOnePanelAccordion"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OnePanelAccordionComponent,
            controllerAs: "example",
            templateUrl: "./one-panel-accordion.component.html", styleUrl: "./one-panel-accordion.component.css",
        }
    }
}
