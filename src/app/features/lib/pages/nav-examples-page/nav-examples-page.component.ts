import type {IComponentController, IComponentOptions} from "angular";
import alternativeNavTs from "@/features/lib/components/alternative-nav/alternative-nav.component.ts?raw"
import customNavCss from "@/features/lib/components/custom-nav/custom-nav.component.css?raw"
import customNavTs from "@/features/lib/components/custom-nav/custom-nav.component.ts?raw"
import dynamicNavTs from "@/features/lib/components/dynamic-nav/dynamic-nav.component.ts?raw"
import keepContentNavTs from "@/features/lib/components/keep-content-nav/keep-content-nav.component.ts?raw"
import navGlobalTs from "@/features/lib/components/nav-global/nav-global.component.ts?raw"
import selectingNavTs from "@/features/lib/components/selecting-nav/selecting-nav.component.ts?raw"
import simpleNavTs from "@/features/lib/components/simple-nav/simple-nav.component.ts?raw"
import verticalNavTs from "@/features/lib/components/vertical-nav/vertical-nav.component.ts?raw"
import { AlternativeNavComponent } from "@/features/lib/components/alternative-nav/alternative-nav.component"
import { CustomNavComponent } from "@/features/lib/components/custom-nav/custom-nav.component"
import { DynamicNavComponent } from "@/features/lib/components/dynamic-nav/dynamic-nav.component"
import { KeepContentNavComponent } from "@/features/lib/components/keep-content-nav/keep-content-nav.component"
import { NavGlobalComponent } from "@/features/lib/components/nav-global/nav-global.component"
import { SelectingNavComponent } from "@/features/lib/components/selecting-nav/selecting-nav.component"
import { SimpleNavComponent } from "@/features/lib/components/simple-nav/simple-nav.component"
import { VerticalNavComponent } from "@/features/lib/components/vertical-nav/vertical-nav.component"

export class NavExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: SimpleNavComponent.$factory.templateUrl,
            typescript: simpleNavTs,
        },
        alternative: {
            html: AlternativeNavComponent.$factory.templateUrl,
            typescript: alternativeNavTs,
        },
        vertical: {
            html: VerticalNavComponent.$factory.templateUrl,
            typescript: verticalNavTs,
        },
        selecting: {
            html: SelectingNavComponent.$factory.templateUrl,
            typescript: selectingNavTs,
        },
        keepContent: {
            html: KeepContentNavComponent.$factory.templateUrl,
            typescript: keepContentNavTs,
        },
        dynamic: {
            html: DynamicNavComponent.$factory.templateUrl,
            typescript: dynamicNavTs,
        },
        custom: {
            html: CustomNavComponent.$factory.templateUrl,
            typescript: customNavTs,
            css: customNavCss,
        },
        global: {
            html: NavGlobalComponent.$factory.templateUrl,
            typescript: navGlobalTs,
        },
    }

    static get $name() {
        return "docsNavExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavExamplesPageComponent,
            templateUrl: "./nav-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
