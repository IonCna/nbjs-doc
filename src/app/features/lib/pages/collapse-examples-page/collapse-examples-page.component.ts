import type {IComponentController, IComponentOptions} from "angular";
import horizontalCollapseTs from "@/features/lib/components/horizontal-collapse/horizontal-collapse.component.ts?raw"
import navbarCollapseTs from "@/features/lib/components/navbar-collapse/navbar-collapse.component.ts?raw"
import simpleCollapseTs from "@/features/lib/components/simple-collapse/simple-collapse.component.ts?raw"
import { HorizontalCollapseComponent } from "@/features/lib/components/horizontal-collapse/horizontal-collapse.component"
import { NavbarCollapseComponent } from "@/features/lib/components/navbar-collapse/navbar-collapse.component"
import { SimpleCollapseComponent } from "@/features/lib/components/simple-collapse/simple-collapse.component"

export class CollapseExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: SimpleCollapseComponent.$factory.templateUrl,
            typescript: simpleCollapseTs,
        },
        horizontal: {
            html: HorizontalCollapseComponent.$factory.templateUrl,
            typescript: horizontalCollapseTs,
        },
        navbar: {
            html: NavbarCollapseComponent.$factory.templateUrl,
            typescript: navbarCollapseTs,
        },
    }

    static get $name() {
        return "docsCollapseExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: CollapseExamplesPageComponent,
            templateUrl: "src/app/features/lib/pages/collapse-examples-page/collapse-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
