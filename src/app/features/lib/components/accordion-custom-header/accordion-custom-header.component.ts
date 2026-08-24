import type { IComponentController, IComponentOptions } from "angular";

export class AccordionCustomHeaderComponent implements IComponentController {
    static get $name() {
        return "docsAccordionCustomHeader"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionCustomHeaderComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/accordion-custom-header/accordion-custom-header.component.html",
        }
    }
}
