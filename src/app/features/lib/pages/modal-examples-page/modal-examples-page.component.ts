import type {IComponentController, IComponentOptions} from "angular";
import modalComponentContentTs from "@/features/lib/components/modal-component-content/modal-component-content.component.ts?raw"
import modalDefaultTs from "@/features/lib/components/modal-default/modal-default.component.ts?raw"
import modalDemoContentTs from "@/features/lib/components/modal-demo-content/modal-demo-content.component.ts?raw"
import modalFocusTs from "@/features/lib/components/modal-focus/modal-focus.component.ts?raw"
import modalFocusContentTs from "@/features/lib/components/modal-focus-content/modal-focus-content.component.ts?raw"
import modalGlobalTs from "@/features/lib/components/modal-global/modal-global.component.ts?raw"
import modalOptionsCss from "@/features/lib/components/modal-options/modal-options.component.css?raw"
import modalOptionsTs from "@/features/lib/components/modal-options/modal-options.component.ts?raw"
import modalStackedTs from "@/features/lib/components/modal-stacked/modal-stacked.component.ts?raw"
import modalStackedContentTs from "@/features/lib/components/modal-stacked-content/modal-stacked-content.component.ts?raw"
import modalUpdatableTs from "@/features/lib/components/modal-updatable/modal-updatable.component.ts?raw"
import modalUpdatableContentTs from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component.ts?raw"
import { ModalComponentContentComponent } from "@/features/lib/components/modal-component-content/modal-component-content.component"
import { ModalDefaultComponent } from "@/features/lib/components/modal-default/modal-default.component"
import { ModalDemoContentComponent } from "@/features/lib/components/modal-demo-content/modal-demo-content.component"
import { ModalFocusComponent } from "@/features/lib/components/modal-focus/modal-focus.component"
import { ModalFocusContentComponent } from "@/features/lib/components/modal-focus-content/modal-focus-content.component"
import { ModalGlobalComponent } from "@/features/lib/components/modal-global/modal-global.component"
import { ModalOptionsComponent } from "@/features/lib/components/modal-options/modal-options.component"
import { ModalStackedComponent } from "@/features/lib/components/modal-stacked/modal-stacked.component"
import { ModalStackedContentComponent } from "@/features/lib/components/modal-stacked-content/modal-stacked-content.component"
import { ModalUpdatableComponent } from "@/features/lib/components/modal-updatable/modal-updatable.component"
import { ModalUpdatableContentComponent } from "@/features/lib/components/modal-updatable-content/modal-updatable-content.component"

export class ModalExamplesPageComponent implements IComponentController {
    public readonly examples = {
        defaults: {
            html: ModalDefaultComponent.$factory.templateUrl,
            typescript: modalDefaultTs,
        },
        componentContent: {
            html: [
                { label: "modal-component-content.component.html", url: ModalComponentContentComponent.$factory.templateUrl },
                { label: "modal-demo-content.component.html", url: ModalDemoContentComponent.$factory.templateUrl },
            ],
            typescript: `${modalComponentContentTs}\n\n// modal-demo-content.component.ts\n${modalDemoContentTs}`,
        },
        focus: {
            html: [
                { label: "modal-focus.component.html", url: ModalFocusComponent.$factory.templateUrl },
                { label: "modal-focus-content.component.html", url: ModalFocusContentComponent.$factory.templateUrl },
            ],
            typescript: `${modalFocusTs}\n\n// modal-focus-content.component.ts\n${modalFocusContentTs}`,
        },
        options: {
            html: ModalOptionsComponent.$factory.templateUrl,
            typescript: modalOptionsTs,
            css: modalOptionsCss,
        },
        updatable: {
            html: [
                { label: "modal-updatable.component.html", url: ModalUpdatableComponent.$factory.templateUrl },
                { label: "modal-updatable-content.component.html", url: ModalUpdatableContentComponent.$factory.templateUrl },
            ],
            typescript: `${modalUpdatableTs}\n\n// modal-updatable-content.component.ts\n${modalUpdatableContentTs}`,
            css: modalOptionsCss,
        },
        stacked: {
            html: [
                { label: "modal-stacked.component.html", url: ModalStackedComponent.$factory.templateUrl },
                { label: "modal-stacked-content.component.html", url: ModalStackedContentComponent.$factory.templateUrl },
            ],
            typescript: `${modalStackedTs}\n\n// modal-stacked-content.component.ts\n${modalStackedContentTs}`,
        },
        global: {
            html: ModalGlobalComponent.$factory.templateUrl,
            typescript: modalGlobalTs,
        },
    }

    static get $name() {
        return "docsModalExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ModalExamplesPageComponent,
            templateUrl: "./modal-examples-page.component.html", styleUrl: "./modal-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
