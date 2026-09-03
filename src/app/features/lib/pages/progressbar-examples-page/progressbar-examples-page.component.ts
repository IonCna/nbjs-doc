import type {IComponentController, IComponentOptions} from "angular";
import contextualTs from "@/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.ts?raw"
import globalTs from "@/features/lib/components/progressbar-global/progressbar-global.component.ts?raw"
import heightTs from "@/features/lib/components/progress-height/progress-height.component.ts?raw"
import labelsTs from "@/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.ts?raw"
import simpleTs from "@/features/lib/components/simple-progressbar/simple-progressbar.component.ts?raw"
import stackedTs from "@/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.ts?raw"
import stripedTs from "@/features/lib/components/striped-progress-bar/striped-progress-bar.component.ts?raw"
import { ContextualTextProgressbarComponent } from "@/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component"
import { CustomLabelsProgressbarComponent } from "@/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component"
import { ProgressbarGlobalComponent } from "@/features/lib/components/progressbar-global/progressbar-global.component"
import { ProgressBarsStackedComponent } from "@/features/lib/components/progress-bars-stacked/progress-bars-stacked.component"
import { ProgressHeightComponent } from "@/features/lib/components/progress-height/progress-height.component"
import { SimpleProgressbarComponent } from "@/features/lib/components/simple-progressbar/simple-progressbar.component"
import { StripedProgressBarComponent } from "@/features/lib/components/striped-progress-bar/striped-progress-bar.component"

export class ProgressbarExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: { html: SimpleProgressbarComponent.$factory.templateUrl, typescript: simpleTs },
        contextual: { html: ContextualTextProgressbarComponent.$factory.templateUrl, typescript: contextualTs },
        striped: { html: StripedProgressBarComponent.$factory.templateUrl, typescript: stripedTs },
        labels: { html: CustomLabelsProgressbarComponent.$factory.templateUrl, typescript: labelsTs },
        height: { html: ProgressHeightComponent.$factory.templateUrl, typescript: heightTs },
        stacked: { html: ProgressBarsStackedComponent.$factory.templateUrl, typescript: stackedTs },
        global: { html: ProgressbarGlobalComponent.$factory.templateUrl, typescript: globalTs },
    }
    static get $name() {
        return "docsProgressbarExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarExamplesPageComponent,
            templateUrl: "./progressbar-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
