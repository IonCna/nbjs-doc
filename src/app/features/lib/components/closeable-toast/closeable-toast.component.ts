import type { IComponentController, IComponentOptions, IPromise, ITimeoutService } from "angular";

export class CloseableToastComponent implements IComponentController {
    public visible = true;
    private reopenTimer?: IPromise<void>;

    constructor(private readonly $timeout: ITimeoutService) {}

    public close(): void {
        this.visible = false;
        this.reopenTimer = this.$timeout(() => {
            this.visible = true;
        }, 3000);
    }

    public $onDestroy(): void {
        if (this.reopenTimer) this.$timeout.cancel(this.reopenTimer);
    }

    static get $name() { return "docsCloseableToast" }
    static get $inject() { return ["$timeout"] }
    static get $factory(): IComponentOptions {
        return { controller: CloseableToastComponent, controllerAs: "example", templateUrl: "./closeable-toast.component.html" }
    }
}
