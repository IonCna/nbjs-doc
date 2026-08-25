import type {IComponentController, IComponentOptions} from "angular";

export class AccordionApiPageComponent implements IComponentController {
    static get $name() {
        return "docsAccordionApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionApiPageComponent,
            templateUrl: "src/app/features/lib/pages/accordion-api-page/accordion-api-page.component.html",
            controllerAs: "$",
        }
    }
}
