import type { IComponentController, IComponentOptions } from "angular";

export class AccordionCustomHeaderComponent implements IComponentController {
    static get $name() {
        return "docsAccordionCustomHeader"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionCustomHeaderComponent,
            controllerAs: "example",
            templateUrl: "./accordion-custom-header.component.html", styleUrl: "./accordion-custom-header.component.css",
        }
    }
}
