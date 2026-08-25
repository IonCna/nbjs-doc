import "@/features/lib/components/custom-nav/custom-nav.component.css";
import type { IComponentController, IComponentOptions } from "angular";

export class CustomNavComponent implements IComponentController {
    public activeId = "custom-weekly";

    static get $name() {
        return "docsCustomNav"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CustomNavComponent,
            controllerAs: "example",
            templateUrl: "/src/app/features/lib/components/custom-nav/custom-nav.component.html",
        }
    }
}
