import type { IComponentController, IComponentOptions } from "angular";

export class TemplateHeaderToastComponent implements IComponentController {
    public visible = true;
    static get $name() { return "docsTemplateHeaderToast" }
    static get $factory(): IComponentOptions {
        return { controller: TemplateHeaderToastComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/template-header-toast/template-header-toast.component.html" }
    }
}
