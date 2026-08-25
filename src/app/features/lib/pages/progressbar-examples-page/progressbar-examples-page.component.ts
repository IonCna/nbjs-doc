import type {IComponentController, IComponentOptions} from "angular";
import contextualHtml from "@/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.html?raw"
import contextualTs from "@/features/lib/components/contextual-text-progressbar/contextual-text-progressbar.component.ts?raw"
import globalHtml from "@/features/lib/components/progressbar-global/progressbar-global.component.html?raw"
import globalTs from "@/features/lib/components/progressbar-global/progressbar-global.component.ts?raw"
import heightHtml from "@/features/lib/components/progress-height/progress-height.component.html?raw"
import heightTs from "@/features/lib/components/progress-height/progress-height.component.ts?raw"
import labelsHtml from "@/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.html?raw"
import labelsTs from "@/features/lib/components/custom-labels-progressbar/custom-labels-progressbar.component.ts?raw"
import simpleHtml from "@/features/lib/components/simple-progressbar/simple-progressbar.component.html?raw"
import simpleTs from "@/features/lib/components/simple-progressbar/simple-progressbar.component.ts?raw"
import stackedHtml from "@/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.html?raw"
import stackedTs from "@/features/lib/components/progress-bars-stacked/progress-bars-stacked.component.ts?raw"
import stripedHtml from "@/features/lib/components/striped-progress-bar/striped-progress-bar.component.html?raw"
import stripedTs from "@/features/lib/components/striped-progress-bar/striped-progress-bar.component.ts?raw"

export class ProgressbarExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: { html: simpleHtml, typescript: simpleTs },
        contextual: { html: contextualHtml, typescript: contextualTs },
        striped: { html: stripedHtml, typescript: stripedTs },
        labels: { html: labelsHtml, typescript: labelsTs },
        height: { html: heightHtml, typescript: heightTs },
        stacked: { html: stackedHtml, typescript: stackedTs },
        global: { html: globalHtml, typescript: globalTs },
    }
    static get $name() {
        return "docsProgressbarExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ProgressbarExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
