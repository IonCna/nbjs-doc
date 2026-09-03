import type {IComponentController, IComponentOptions} from "angular";
import alertCloseableTs from "@/features/lib/components/alert-closeable/alert-closeable.component.ts?raw"
import alertCustomCss from "@/features/lib/components/alert-custom/alert-custom.component.css?raw"
import alertGlobalTs from "@/features/lib/components/alert-global/alert-global.component.ts?raw"
import selfClosingAlertTs from "@/features/lib/components/self-closing-alert/self-closing-alert.component.ts?raw"
import { AlertCloseableComponent } from "@/features/lib/components/alert-closeable/alert-closeable.component"
import { AlertCustomComponent } from "@/features/lib/components/alert-custom/alert-custom.component"
import { AlertGlobalComponent } from "@/features/lib/components/alert-global/alert-global.component"
import { SelfClosingAlertComponent } from "@/features/lib/components/self-closing-alert/self-closing-alert.component"
import { SimpleAlertComponent } from "@/features/lib/components/simple-alert/simple-alert.component"

export class AlertExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: SimpleAlertComponent.$factory.templateUrl,
        },
        closeable: {
            html: AlertCloseableComponent.$factory.templateUrl,
            typescript: alertCloseableTs,
        },
        selfClosing: {
            html: SelfClosingAlertComponent.$factory.templateUrl,
            typescript: selfClosingAlertTs,
        },
        custom: {
            html: AlertCustomComponent.$factory.templateUrl,
            css: alertCustomCss,
        },
        global: {
            html: AlertGlobalComponent.$factory.templateUrl,
            typescript: alertGlobalTs,
        },
    }

    static get $name() {
        return "docsAlertExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertExamplesPageComponent,
            templateUrl: "./alert-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
