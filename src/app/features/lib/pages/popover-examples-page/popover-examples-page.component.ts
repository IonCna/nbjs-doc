import type {IComponentController, IComponentOptions} from "angular";
import autocloseHtml from "@/features/lib/components/popover-autoclose/popover-autoclose.component.html?raw"
import autocloseTs from "@/features/lib/components/popover-autoclose/popover-autoclose.component.ts?raw"
import bodyHtml from "@/features/lib/components/popover-body/popover-body.component.html?raw"
import bodyTs from "@/features/lib/components/popover-body/popover-body.component.ts?raw"
import contextHtml from "@/features/lib/components/popover-context/popover-context.component.html?raw"
import contextTs from "@/features/lib/components/popover-context/popover-context.component.ts?raw"
import customClassCss from "@/features/lib/components/popover-custom-class/popover-custom-class.component.css?raw"
import customClassHtml from "@/features/lib/components/popover-custom-class/popover-custom-class.component.html?raw"
import customClassTs from "@/features/lib/components/popover-custom-class/popover-custom-class.component.ts?raw"
import customTargetHtml from "@/features/lib/components/popover-custom-target/popover-custom-target.component.html?raw"
import customTargetTs from "@/features/lib/components/popover-custom-target/popover-custom-target.component.ts?raw"
import delaysHtml from "@/features/lib/components/popover-delays/popover-delays.component.html?raw"
import delaysTs from "@/features/lib/components/popover-delays/popover-delays.component.ts?raw"
import eventsHtml from "@/features/lib/components/popover-events/popover-events.component.html?raw"
import eventsTs from "@/features/lib/components/popover-events/popover-events.component.ts?raw"
import globalHtml from "@/features/lib/components/popover-global/popover-global.component.html?raw"
import globalTs from "@/features/lib/components/popover-global/popover-global.component.ts?raw"
import manualHtml from "@/features/lib/components/popover-manual-control/popover-manual-control.component.html?raw"
import manualTs from "@/features/lib/components/popover-manual-control/popover-manual-control.component.ts?raw"
import placementsHtml from "@/features/lib/components/popover-placements/popover-placements.component.html?raw"
import placementsTs from "@/features/lib/components/popover-placements/popover-placements.component.ts?raw"
import templateHtml from "@/features/lib/components/popover-template/popover-template.component.html?raw"
import templateTs from "@/features/lib/components/popover-template/popover-template.component.ts?raw"
import triggersHtml from "@/features/lib/components/popover-triggers/popover-triggers.component.html?raw"
import triggersTs from "@/features/lib/components/popover-triggers/popover-triggers.component.ts?raw"

export class PopoverExamplesPageComponent implements IComponentController {
    public readonly examples = {
        placements: { html: placementsHtml, typescript: placementsTs },
        template: { html: templateHtml, typescript: templateTs },
        triggers: { html: triggersHtml, typescript: triggersTs },
        manual: { html: manualHtml, typescript: manualTs },
        autoclose: { html: autocloseHtml, typescript: autocloseTs },
        context: { html: contextHtml, typescript: contextTs },
        customTarget: { html: customTargetHtml, typescript: customTargetTs },
        delays: { html: delaysHtml, typescript: delaysTs },
        events: { html: eventsHtml, typescript: eventsTs },
        body: { html: bodyHtml, typescript: bodyTs },
        customClass: { html: customClassHtml, typescript: customClassTs, css: customClassCss },
        global: { html: globalHtml, typescript: globalTs },
    }
    static get $name() {
        return "docsPopoverExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/popover-examples-page/popover-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
