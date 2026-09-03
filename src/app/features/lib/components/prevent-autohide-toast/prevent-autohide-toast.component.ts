import type { IComponentController, IComponentOptions, ITimeoutService } from "angular";

export class PreventAutohideToastComponent implements IComponentController {
    public visible = false;
    public autohide = true;

    constructor(private readonly $timeout: ITimeoutService) {}

    public show(): void {
        this.visible = false;
        this.autohide = true;
        this.$timeout(() => this.visible = true);
    }

    public hide(): void {
        this.visible = false;
        this.autohide = true;
    }

    static get $name() { return "docsPreventAutohideToast" }
    static get $inject() { return ["$timeout"] }
    static get $factory(): IComponentOptions {
        return { controller: PreventAutohideToastComponent, controllerAs: "example", templateUrl: "./prevent-autohide-toast.component.html" }
    }
}
