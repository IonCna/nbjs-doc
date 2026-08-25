import type { IComponentController, IComponentOptions } from "angular";
import { NgbAlertConfig } from "ngb-js";

export class AlertGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbAlertConfig, "animation" | "dismissible" | "type">;

    constructor(private readonly config: NgbAlertConfig) {
        this.initialConfig = {
            animation: config.animation,
            dismissible: config.dismissible,
            type: config.type,
        };

        config.animation = false;
        config.dismissible = false;
        config.type = "success";
    }

    $onDestroy() {
        this.config.animation = this.initialConfig.animation;
        this.config.dismissible = this.initialConfig.dismissible;
        this.config.type = this.initialConfig.type;
    }

    static get $name() {
        return "docsAlertGlobal"
    }

    static get $inject() {
        return [NgbAlertConfig.$name]
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertGlobalComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/alert-global/alert-global.component.html",
        }
    }
}
