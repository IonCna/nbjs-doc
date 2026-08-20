import type {IComponentController, IComponentOptions, ITimeoutService, IWindowService} from "angular";

export class HomePageComponent implements IComponentController {
    static $inject = ["$window", "$timeout"]

    readonly installCommand = "npm install ngb-js"
    installCommandCopied = false

    constructor(
        private readonly $window: IWindowService,
        private readonly $timeout: ITimeoutService,
    ) {}

    static get $name() {
        return "docsHomePage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: HomePageComponent,
            templateUrl: "/src/app/features/home/pages/home-page/home-page.component.html",
            controllerAs: "$",
        }
    }

    copyInstallCommand() {
        void this.$window.navigator.clipboard.writeText(this.installCommand).then(() => {
            this.$timeout(() => {
                this.installCommandCopied = true
            })

            this.$timeout(() => {
                this.installCommandCopied = false
            }, 2000)
        })
    }
}
