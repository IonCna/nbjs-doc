import type {IComponentController, IComponentOptions} from "angular";
import autocloseTs from "@/features/lib/components/tooltip-autoclose/tooltip-autoclose.component.ts?raw"
import bodyTs from "@/features/lib/components/tooltip-body/tooltip-body.component.ts?raw"
import contextTs from "@/features/lib/components/tooltip-context/tooltip-context.component.ts?raw"
import customClassCss from "@/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.css?raw"
import customClassTs from "@/features/lib/components/tooltip-custom-class/tooltip-custom-class.component.ts?raw"
import customTargetTs from "@/features/lib/components/tooltip-custom-target/tooltip-custom-target.component.ts?raw"
import delaysTs from "@/features/lib/components/tooltip-delays/tooltip-delays.component.ts?raw"
import globalTs from "@/features/lib/components/tooltip-global/tooltip-global.component.ts?raw"
import placementsTs from "@/features/lib/components/tooltip-placements/tooltip-placements.component.ts?raw"
import templateTs from "@/features/lib/components/tooltip-template/tooltip-template.component.ts?raw"
import triggersTs from "@/features/lib/components/tooltip-triggers/tooltip-triggers.component.ts?raw"
import { TooltipAutocloseComponent } from "@/features/lib/components/tooltip-autoclose/tooltip-autoclose.component"
import { TooltipBodyComponent } from "@/features/lib/components/tooltip-body/tooltip-body.component"
import { TooltipContextComponent } from "@/features/lib/components/tooltip-context/tooltip-context.component"
import { TooltipCustomClassComponent } from "@/features/lib/components/tooltip-custom-class/tooltip-custom-class.component"
import { TooltipCustomTargetComponent } from "@/features/lib/components/tooltip-custom-target/tooltip-custom-target.component"
import { TooltipDelaysComponent } from "@/features/lib/components/tooltip-delays/tooltip-delays.component"
import { TooltipGlobalComponent } from "@/features/lib/components/tooltip-global/tooltip-global.component"
import { TooltipPlacementsComponent } from "@/features/lib/components/tooltip-placements/tooltip-placements.component"
import { TooltipTemplateComponent } from "@/features/lib/components/tooltip-template/tooltip-template.component"
import { TooltipTriggersComponent } from "@/features/lib/components/tooltip-triggers/tooltip-triggers.component"

export class TooltipExamplesPageComponent implements IComponentController {
    public readonly examples = {
        placements: { html: TooltipPlacementsComponent.$factory.templateUrl, typescript: placementsTs },
        template: { html: TooltipTemplateComponent.$factory.templateUrl, typescript: templateTs },
        triggers: { html: TooltipTriggersComponent.$factory.templateUrl, typescript: triggersTs },
        autoclose: { html: TooltipAutocloseComponent.$factory.templateUrl, typescript: autocloseTs },
        context: { html: TooltipContextComponent.$factory.templateUrl, typescript: contextTs },
        customTarget: { html: TooltipCustomTargetComponent.$factory.templateUrl, typescript: customTargetTs },
        delays: { html: TooltipDelaysComponent.$factory.templateUrl, typescript: delaysTs },
        body: { html: TooltipBodyComponent.$factory.templateUrl, typescript: bodyTs },
        customClass: { html: TooltipCustomClassComponent.$factory.templateUrl, typescript: customClassTs, css: customClassCss },
        global: { html: TooltipGlobalComponent.$factory.templateUrl, typescript: globalTs },
    }
    static get $name() {
        return "docsTooltipExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: TooltipExamplesPageComponent,
            templateUrl: "./tooltip-examples-page.component.html", styleUrl: "./tooltip-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
