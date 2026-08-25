import type { IComponentController, IComponentOptions } from "angular";

export class AccordionSimpleComponent implements IComponentController {
    static get $name() {
        return "docsAccordionSimple"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionSimpleComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/accordion-simple/accordion-simple.component.html",
        }
    }
}
