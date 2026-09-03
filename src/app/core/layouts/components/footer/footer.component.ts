import type {IComponentOptions} from "angular";

export class FooterComponent {
    static get $name() {
        return "docsFooter"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: FooterComponent,
            templateUrl: "./footer.component.html",
        }
    }
}
