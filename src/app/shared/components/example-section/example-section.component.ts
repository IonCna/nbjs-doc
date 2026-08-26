import type { IComponentController, IComponentOptions, ITemplateRequestService } from "angular";

export class ExampleSectionComponent implements IComponentController {
    public fragment!: string;
    public title!: string;
    public description!: string;
    public htmlCode = "";
    public htmlCodeUrl?: string | Array<string | { label?: string; url: string }>;
    public tsCode?: string;
    public cssCode?: string;

    public codeCollapsed = true;
    public activeTab = "html";

    static $inject = ["$templateRequest"];

    constructor(private readonly templateRequest: ITemplateRequestService) {}

    public $onInit() {
        if (!this.htmlCodeUrl) return;

        const urls = Array.isArray(this.htmlCodeUrl) ? this.htmlCodeUrl : [this.htmlCodeUrl];

        Promise.all(urls.map((entry) => {
            const url = typeof entry === "string" ? entry : entry.url;

            return this.templateRequest(url).then((html) => {
                if (typeof entry === "string" || !entry.label) return html;

                return `<!-- ${entry.label} -->\n${html}`;
            });
        })).then((templates) => {
            this.htmlCode = templates.join("\n\n");
        });
    }

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
                htmlCodeUrl: "<?",
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
