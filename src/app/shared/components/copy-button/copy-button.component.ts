import type { IComponentController, IComponentOptions, ITimeoutService, IWindowService } from "angular";

export class CopyButtonComponent implements IComponentController {
    public value!: string;
    public ariaLabel?: string;
    public buttonClass?: string;
    public copied = false;

    constructor(
        private readonly $window: IWindowService,
        private readonly $timeout: ITimeoutService,
    ) {}

    public copy() {
        void this.$window.navigator.clipboard.writeText(this.value).then(() => {
            this.$timeout(() => {
                this.copied = true;
            });

            this.$timeout(() => {
                this.copied = false;
            }, 2000);
        });
    }

    static get $name() {
        return "docsCopyButton"
    }

    static get $inject() {
        return ["$window", "$timeout"]
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                value: "<",
                ariaLabel: "@?",
                buttonClass: "@?",
            },
            controller: CopyButtonComponent,
            controllerAs: "copyButton",
            templateUrl: "/src/app/shared/components/copy-button/copy-button.component.html",
        }
    }
}
