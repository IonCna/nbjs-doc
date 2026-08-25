import type { IComponentController, IComponentOptions } from "angular";

export class ExampleSectionComponent implements IComponentController {
    public fragment!: string;
    public title!: string;
    public description!: string;
    public htmlCode!: string;
    public tsCode?: string;
    public cssCode?: string;

    public codeCollapsed = true;
    public activeTab = "html";

    public toggleCode() {
        this.codeCollapsed = !this.codeCollapsed;
    }

    public get hasAdditionalCode() {
        return Boolean(this.tsCode || this.cssCode);
    }

    public get activeCode() {
        if (this.activeTab === "typescript") return this.tsCode ?? "";
        if (this.activeTab === "css") return this.cssCode ?? "";
        return this.htmlCode;
    }

    static get $name() {
        return "docsExampleSection"
    }

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                fragment: "@",
                title: "@",
                description: "@",
                htmlCode: "<",
                tsCode: "<?",
                cssCode: "<?",
            },
            controller: ExampleSectionComponent,
            controllerAs: "example",
            transclude: true,
            templateUrl: "src/app/shared/components/example-section/example-section.component.html",
        }
    }
}
