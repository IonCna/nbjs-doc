import type {IComponentController, IComponentOptions} from "angular";
import autocloseTs from "@/features/lib/components/popover-autoclose/popover-autoclose.component.ts?raw"
import bodyTs from "@/features/lib/components/popover-body/popover-body.component.ts?raw"
import contextTs from "@/features/lib/components/popover-context/popover-context.component.ts?raw"
import customClassCss from "@/features/lib/components/popover-custom-class/popover-custom-class.component.css?raw"
import customClassTs from "@/features/lib/components/popover-custom-class/popover-custom-class.component.ts?raw"
import customTargetTs from "@/features/lib/components/popover-custom-target/popover-custom-target.component.ts?raw"
import delaysTs from "@/features/lib/components/popover-delays/popover-delays.component.ts?raw"
import eventsTs from "@/features/lib/components/popover-events/popover-events.component.ts?raw"
import globalTs from "@/features/lib/components/popover-global/popover-global.component.ts?raw"
import manualTs from "@/features/lib/components/popover-manual-control/popover-manual-control.component.ts?raw"
import placementsTs from "@/features/lib/components/popover-placements/popover-placements.component.ts?raw"
import templateTs from "@/features/lib/components/popover-template/popover-template.component.ts?raw"
import triggersTs from "@/features/lib/components/popover-triggers/popover-triggers.component.ts?raw"
import { PopoverAutocloseComponent } from "@/features/lib/components/popover-autoclose/popover-autoclose.component"
import { PopoverBodyComponent } from "@/features/lib/components/popover-body/popover-body.component"
import { PopoverContextComponent } from "@/features/lib/components/popover-context/popover-context.component"
import { PopoverCustomClassComponent } from "@/features/lib/components/popover-custom-class/popover-custom-class.component"
import { PopoverCustomTargetComponent } from "@/features/lib/components/popover-custom-target/popover-custom-target.component"
import { PopoverDelaysComponent } from "@/features/lib/components/popover-delays/popover-delays.component"
import { PopoverEventsComponent } from "@/features/lib/components/popover-events/popover-events.component"
import { PopoverGlobalComponent } from "@/features/lib/components/popover-global/popover-global.component"
import { PopoverManualControlComponent } from "@/features/lib/components/popover-manual-control/popover-manual-control.component"
import { PopoverPlacementsComponent } from "@/features/lib/components/popover-placements/popover-placements.component"
import { PopoverTemplateComponent } from "@/features/lib/components/popover-template/popover-template.component"
import { PopoverTriggersComponent } from "@/features/lib/components/popover-triggers/popover-triggers.component"

export class PopoverExamplesPageComponent implements IComponentController {
    public readonly examples = {
        placements: { html: PopoverPlacementsComponent.$factory.templateUrl, typescript: placementsTs },
        template: { html: PopoverTemplateComponent.$factory.templateUrl, typescript: templateTs },
        triggers: { html: PopoverTriggersComponent.$factory.templateUrl, typescript: triggersTs },
        manual: { html: PopoverManualControlComponent.$factory.templateUrl, typescript: manualTs },
        autoclose: { html: PopoverAutocloseComponent.$factory.templateUrl, typescript: autocloseTs },
        context: { html: PopoverContextComponent.$factory.templateUrl, typescript: contextTs },
        customTarget: { html: PopoverCustomTargetComponent.$factory.templateUrl, typescript: customTargetTs },
        delays: { html: PopoverDelaysComponent.$factory.templateUrl, typescript: delaysTs },
        events: { html: PopoverEventsComponent.$factory.templateUrl, typescript: eventsTs },
        body: { html: PopoverBodyComponent.$factory.templateUrl, typescript: bodyTs },
        customClass: { html: PopoverCustomClassComponent.$factory.templateUrl, typescript: customClassTs, css: customClassCss },
        global: { html: PopoverGlobalComponent.$factory.templateUrl, typescript: globalTs },
    }
    static get $name() {
        return "docsPopoverExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverExamplesPageComponent,
            templateUrl: "./popover-examples-page.component.html", styleUrl: "./popover-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
