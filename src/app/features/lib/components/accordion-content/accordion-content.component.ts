import type { IComponentController, IComponentOptions } from "angular";

export class AccordionContentComponent implements IComponentController {
    public draft = "This value remains after collapsing the panel.";

    static get $name() {
        return "docsAccordionContent"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionContentComponent,
            controllerAs: "example",
            templateUrl: "./accordion-content.component.html", styleUrl: "./accordion-content.component.css",
        }
    }
}
