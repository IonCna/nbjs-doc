import "@/features/lib/components/alert-custom/alert-custom.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class AlertCustomComponent implements IComponentController {
    static get $name() {
        return "docsAlertCustom"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertCustomComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/alert-custom/alert-custom.component.html",
        }
    }
}
