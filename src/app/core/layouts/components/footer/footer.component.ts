import type {IComponentOptions} from "angular";

export class FooterComponent {
    static get $name() {
        return "docsFooter"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: FooterComponent,
            templateUrl: "src/app/core/layouts/components/footer/footer.component.html",
        }
    }
}
