import type { IComponentController, IComponentOptions } from "angular";

export class OnePanelAccordionComponent implements IComponentController {
    static get $name() {
        return "docsOnePanelAccordion"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: OnePanelAccordionComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/one-panel-accordion/one-panel-accordion.component.html",
        }
    }
}
