import type { IComponentController, IComponentOptions } from "angular";
import { NgbRatingConfig } from "ngb-js";

export class RatingGlobalComponent implements IComponentController {
    private readonly initialConfig: Pick<NgbRatingConfig, "max" | "readonly" | "resettable" | "tabindex">;

    constructor(private readonly config: NgbRatingConfig) {
        this.initialConfig = {
            max: config.max,
            readonly: config.readonly,
            resettable: config.resettable,
            tabindex: config.tabindex,
        };
        config.max = 5;
        config.readonly = true;
        config.resettable = true;
        config.tabindex = -1;
    }

    public $postLink() { this.restoreConfig(); }
    public $onDestroy() { this.restoreConfig(); }
    private restoreConfig() { Object.assign(this.config, this.initialConfig); }

    static get $name() { return "docsRatingGlobal" }
    static get $inject() { return [NgbRatingConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: RatingGlobalComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/rating-global/rating-global.component.html" }
    }
}
