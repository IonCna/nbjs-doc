import type {IComponentController, IComponentOptions} from "angular";
import horizontalCollapseHtml from "@/features/lib/components/horizontal-collapse/horizontal-collapse.component.html?raw"
import horizontalCollapseTs from "@/features/lib/components/horizontal-collapse/horizontal-collapse.component.ts?raw"
import navbarCollapseHtml from "@/features/lib/components/navbar-collapse/navbar-collapse.component.html?raw"
import navbarCollapseTs from "@/features/lib/components/navbar-collapse/navbar-collapse.component.ts?raw"
import simpleCollapseHtml from "@/features/lib/components/simple-collapse/simple-collapse.component.html?raw"
import simpleCollapseTs from "@/features/lib/components/simple-collapse/simple-collapse.component.ts?raw"

export class CollapseExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: simpleCollapseHtml,
            typescript: simpleCollapseTs,
        },
        horizontal: {
            html: horizontalCollapseHtml,
            typescript: horizontalCollapseTs,
        },
        navbar: {
            html: navbarCollapseHtml,
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
