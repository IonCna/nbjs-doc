import type { IComponentController, IComponentOptions } from "angular";

export class InlineToastComponent implements IComponentController {
    public showHeaderToast = true;
    static get $name() { return "docsInlineToast" }
    static get $factory(): IComponentOptions {
        return { controller: InlineToastComponent, controllerAs: "example", templateUrl: "./inline-toast.component.html" }
    }
}
