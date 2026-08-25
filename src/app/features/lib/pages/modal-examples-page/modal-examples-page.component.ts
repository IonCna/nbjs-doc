import type {IComponentController, IComponentOptions} from "angular";
import modalComponentContentHtml from "@/features/lib/components/modal-component-content/modal-component-content.component.html?raw"
import modalComponentContentTs from "@/features/lib/components/modal-component-content/modal-component-content.component.ts?raw"
import modalDefaultHtml from "@/features/lib/components/modal-default/modal-default.component.html?raw"
import modalDefaultTs from "@/features/lib/components/modal-default/modal-default.component.ts?raw"
import modalDemoContentHtml from "@/features/lib/components/modal-demo-content/modal-demo-content.component.html?raw"
import modalDemoContentTs from "@/features/lib/components/modal-demo-content/modal-demo-content.component.ts?raw"
import modalFocusHtml from "@/features/lib/components/modal-focus/modal-focus.component.html?raw"
import modalFocusTs from "@/features/lib/components/modal-focus/modal-focus.component.ts?raw"
import modalFocusContentHtml from "@/features/lib/components/modal-focus-content/modal-focus-content.component.html?raw"
import modalFocusContentTs from "@/features/lib/components/modal-focus-content/modal-focus-content.component.ts?raw"
import modalGlobalHtml from "@/features/lib/components/modal-global/modal-global.component.html?raw"
import modalGlobalTs from "@/features/lib/components/modal-global/modal-global.component.ts?raw"
import modalOptionsCss from "@/features/lib/components/modal-options/modal-options.component.css?raw"
import modalOptionsHtml from "@/features/lib/components/modal-options/modal-options.component.html?raw"
import modalOptionsTs from "@/features/lib/components/modal-options/modal-options.component.ts?raw"
import modalStackedHtml from "@/features/lib/components/modal-stacked/modal-stacked.component.html?raw"
import modalStackedTs from "@/features/lib/components/modal-stacked/modal-stacked.component.ts?raw"
import modalStackedContentHtml from "@/features/lib/components/modal-stacked-content/modal-stacked-content.component.html?raw"
import modalStackedContentTs from "@/features/lib/components/modal-stacked-content/modal-stacked-content.component.ts?raw"
import modalUpdatableHtml from "@/features/lib/components/modal-updatable/modal-updatable.component.html?raw"
import modalUpdatableTs from "@/features/lib/components/modal-updatable/modal-updatable.component.ts?raw"
import modalUpdatableContentHtml from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component.html?raw"
import modalUpdatableContentTs from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component.ts?raw"

export class ModalExamplesPageComponent implements IComponentController {
    public readonly examples = {
        defaults: {
            html: modalDefaultHtml,
            typescript: modalDefaultTs,
        },
        componentContent: {
            html: `${modalComponentContentHtml}\n\n<!-- modal-demo-content.component.html -->\n${modalDemoContentHtml}`,
            typescript: `${modalComponentContentTs}\n\n// modal-demo-content.component.ts\n${modalDemoContentTs}`,
        },
        focus: {
            html: `${modalFocusHtml}\n\n<!-- modal-focus-content.component.html -->\n${modalFocusContentHtml}`,
            typescript: `${modalFocusTs}\n\n// modal-focus-content.component.ts\n${modalFocusContentTs}`,
        },
        options: {
            html: modalOptionsHtml,
            typescript: modalOptionsTs,
            css: modalOptionsCss,
        },
        updatable: {
            html: `${modalUpdatableHtml}\n\n<!-- modal-updatable-content.component.html -->\n${modalUpdatableContentHtml}`,
            typescript: `${modalUpdatableTs}\n\n// modal-updatable-content.component.ts\n${modalUpdatableContentTs}`,
            css: modalOptionsCss,
        },
        stacked: {
            html: `${modalStackedHtml}\n\n<!-- modal-stacked-content.component.html -->\n${modalStackedContentHtml}`,
            typescript: `${modalStackedTs}\n\n// modal-stacked-content.component.ts\n${modalStackedContentTs}`,
        },
        global: {
            html: modalGlobalHtml,
            typescript: modalGlobalTs,
        },
    }

    static get $name() {
        return "docsModalExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/modal-examples-page/modal-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
