import type { IComponentController, IComponentOptions } from "angular";

export class TemplateHeaderToastComponent implements IComponentController {
    public visible = true;
    static get $name() { return "docsTemplateHeaderToast" }
    static get $factory(): IComponentOptions {
        return { controller: TemplateHeaderToastComponent, controllerAs: "example", templateUrl: "./template-header-toast.component.html", styleUrl: "./template-header-toast.component.css" }
    }
}
