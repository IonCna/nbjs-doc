import type {IComponentController, IComponentOptions} from "angular";

export class AccordionExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsAccordionExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/accordion-examples-page/accordion-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
