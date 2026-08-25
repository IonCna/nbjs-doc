import type {IComponentController, IComponentOptions} from "angular";
import closeableHtml from "@/features/lib/components/closeable-toast/closeable-toast.component.html?raw"
import closeableTs from "@/features/lib/components/closeable-toast/closeable-toast.component.ts?raw"
import inlineHtml from "@/features/lib/components/inline-toast/inline-toast.component.html?raw"
import inlineTs from "@/features/lib/components/inline-toast/inline-toast.component.ts?raw"
import managementHtml from "@/features/lib/components/toast-management/toast-management.component.html?raw"
import managementTs from "@/features/lib/components/toast-management/toast-management.component.ts?raw"
import preventAutohideHtml from "@/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.html?raw"
import preventAutohideTs from "@/features/lib/components/prevent-autohide-toast/prevent-autohide-toast.component.ts?raw"
import templateHeaderHtml from "@/features/lib/components/template-header-toast/template-header-toast.component.html?raw"
import templateHeaderTs from "@/features/lib/components/template-header-toast/template-header-toast.component.ts?raw"

export class ToastExamplesPageComponent implements IComponentController {
    public readonly examples = {
        inline: { html: inlineHtml, typescript: inlineTs },
        templateHeader: { html: templateHeaderHtml, typescript: templateHeaderTs },
        closeable: { html: closeableHtml, typescript: closeableTs },
        preventAutohide: { html: preventAutohideHtml, typescript: preventAutohideTs },
        management: { html: managementHtml, typescript: managementTs },
    }
    static get $name() {
        return "docsToastExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: ToastExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/toast-examples-page/toast-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
