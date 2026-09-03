import type {IComponentController, IComponentOptions} from "angular";
import closeableTs from "@/features/lib/components/closeable-toast/closeable-toast.component.ts?raw"
import inlineTs from "@/features/lib/components/inline-toast/inline-toast.component.ts?raw"
import managementTs from "@/features/lib/components/toast-management/toast-management.component.ts?raw"
import preventAutohideTs from "@/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.ts?raw"
import templateHeaderTs from "@/features/lib/components/template-header-toast/template-header-toast.component.ts?raw"
import { CloseableToastComponent } from "@/features/lib/components/closeable-toast/closeable-toast.component"
import { ToastManagementComponent } from "@/features/lib/components/toast-management/toast-management.component"
import { InlineToastComponent } from "@/features/lib/components/inline-toast/inline-toast.component"
import { PreventAutohideToastComponent } from "@/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component"
import { TemplateHeaderToastComponent } from "@/features/lib/components/template-header-toast/template-header-toast.component"

export class ToastExamplesPageComponent implements IComponentController {
    public readonly examples = {
        inline: { html: InlineToastComponent.$factory.templateUrl, typescript: inlineTs },
        templateHeader: { html: TemplateHeaderToastComponent.$factory.templateUrl, typescript: templateHeaderTs },
        closeable: { html: CloseableToastComponent.$factory.templateUrl, typescript: closeableTs },
        preventAutohide: { html: PreventAutohideToastComponent.$factory.templateUrl, typescript: preventAutohideTs },
        management: { html: ToastManagementComponent.$factory.templateUrl, typescript: managementTs },
    }
    static get $name() {
        return "docsToastExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ToastExamplesPageComponent,
            templateUrl: "./toast-examples-page.component.html", styleUrl: "./toast-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
