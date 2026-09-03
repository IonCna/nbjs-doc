import type { IComponentController, IComponentOptions } from "angular";
import { NgbPopoverConfig } from "ngb-js";

export class PopoverGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbPopoverConfig, "container" | "openDelay" | "placement" | "triggers">;

    constructor(private readonly config: NgbPopoverConfig) {
        this.initialConfig = {
            container: config.container,
            openDelay: config.openDelay,
            placement: config.placement,
            triggers: config.triggers,
        };
        config.container = "body";
        config.openDelay = 300;
        config.placement = "end";
        config.triggers = "mouseenter:mouseleave";
    }

    public $postLink() { this.restoreConfig(); }
    public $onDestroy() { this.restoreConfig(); }
    private restoreConfig() {
        this.config.container = this.initialConfig.container;
        this.config.openDelay = this.initialConfig.openDelay;
        this.config.placement = this.initialConfig.placement;
        this.config.triggers = this.initialConfig.triggers;
    }

    static get $name() { return "docsPopoverGlobal" }
    static get $inject() { return [NgbPopoverConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: PopoverGlobalComponent, controllerAs: "example", templateUrl: "./popover-global.component.html" }
    }
}
