import type {IComponentController, IComponentOptions} from "angular";

export class AccordionApiPageComponent implements IComponentController {
    static get $name() {
        return "docsAccordionApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionApiPageComponent,
            templateUrl: "./accordion-api-page.component.html", styleUrl: "./accordion-api-page.component.css",
            controllerAs: "$",
        }
    }
}
