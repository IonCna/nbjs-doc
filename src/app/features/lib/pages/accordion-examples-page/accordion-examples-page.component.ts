import type {IComponentController, IComponentOptions} from "angular";
import accordionContentHtml from "@/features/lib/components/accordion-content/accordion-content.component.html?raw"
import accordionContentTs from "@/features/lib/components/accordion-content/accordion-content.component.ts?raw"
import accordionCustomHeaderHtml from "@/features/lib/components/accordion-custom-header/accordion-custom-header.component.html?raw"
import accordionGlobalHtml from "@/features/lib/components/accordion-global/accordion-global.component.html?raw"
import accordionGlobalTs from "@/features/lib/components/accordion-global/accordion-global.component.ts?raw"
import accordionSimpleHtml from "@/features/lib/components/accordion-simple/accordion-simple.component.html?raw"
import accordionTogglePanelsHtml from "@/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.html?raw"
import accordionTogglePanelsTs from "@/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component.ts?raw"
import onePanelAccordionHtml from "@/features/lib/components/one-panel-accordion/one-panel-accordion.component.html?raw"

export class AccordionExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: accordionSimpleHtml,
        },
        onePanel: {
            html: onePanelAccordionHtml,
        },
        togglePanels: {
            html: accordionTogglePanelsHtml,
            typescript: accordionTogglePanelsTs,
        },
        customHeader: {
            html: accordionCustomHeaderHtml,
        },
        content: {
            html: accordionContentHtml,
            typescript: accordionContentTs,
        },
        global: {
            html: accordionGlobalHtml,
            typescript: accordionGlobalTs,
        },
    }

    static get $name() {
        return "docsAccordionExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AccordionExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/accordion-examples-page/accordion-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
