import type {IComponentController, IComponentOptions} from "angular";
import accordionContentTs from "@/features/lib/components/accordion-content/accordion-content.component.ts?raw"
import accordionGlobalTs from "@/features/lib/components/accordion-global/accordion-global.component.ts?raw"
import accordionTogglePanelsTs from "@/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.ts?raw"
import { AccordionContentComponent } from "@/features/lib/components/accordion-content/accordion-content.component"
import { AccordionCustomHeaderComponent } from "@/features/lib/components/accordion-custom-header/accordion-custom-header.component"
import { AccordionGlobalComponent } from "@/features/lib/components/accordion-global/accordion-global.component"
import { AccordionSimpleComponent } from "@/features/lib/components/accordion-simple/accordion-simple.component"
import { AccordionTogglePanelsComponent } from "@/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component"
import { OnePanelAccordionComponent } from "@/features/lib/components/one-panel-accordion/one-panel-accordion.component"

export class AccordionExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: AccordionSimpleComponent.$factory.templateUrl,
        },
        onePanel: {
            html: OnePanelAccordionComponent.$factory.templateUrl,
        },
        togglePanels: {
            html: AccordionTogglePanelsComponent.$factory.templateUrl,
            typescript: accordionTogglePanelsTs,
        },
        customHeader: {
            html: AccordionCustomHeaderComponent.$factory.templateUrl,
        },
        content: {
            html: AccordionContentComponent.$factory.templateUrl,
            typescript: accordionContentTs,
        },
        global: {
            html: AccordionGlobalComponent.$factory.templateUrl,
            typescript: accordionGlobalTs,
        },
    }

    static get $name() {
        return "docsAccordionExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionExamplesPageComponent,
            templateUrl: "./accordion-examples-page.component.html", styleUrl: "./accordion-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
