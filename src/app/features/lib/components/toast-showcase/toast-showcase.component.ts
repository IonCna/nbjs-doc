import type { IComponentController, IComponentOptions, ITimeoutService } from "angular";

export class ToastShowcaseComponent implements IComponentController {
    public visible = true;
    constructor(private readonly $timeout: ITimeoutService) {}
    public reset() { this.visible = false; this.$timeout(() => this.visible = true); }
    static get $name() { return "docsToastShowcase" }
    static get $inject() { return ["$timeout"] }
    static get $factory(): IComponentOptions {
        return { controller: ToastShowcaseComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/toast-showcase/toast-showcase.component.html" }
    }
}
