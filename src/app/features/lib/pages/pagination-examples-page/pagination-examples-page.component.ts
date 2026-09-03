import type {IComponentController, IComponentOptions} from "angular";
import advancedPaginationTs from "@/features/lib/components/advanced-pagination/advanced-pagination.component.ts?raw"
import basicPaginationTs from "@/features/lib/components/basic-pagination/basic-pagination.component.ts?raw"
import customPaginationTs from "@/features/lib/components/custom-pagination/custom-pagination.component.ts?raw"
import disabledPaginationTs from "@/features/lib/components/disabled-pagination/disabled-pagination.component.ts?raw"
import paginationAlignmentTs from "@/features/lib/components/pagination-alignment/pagination-alignment.component.ts?raw"
import paginationGlobalTs from "@/features/lib/components/pagination-global/pagination-global.component.ts?raw"
import paginationSizeTs from "@/features/lib/components/pagination-size/pagination-size.component.ts?raw"
import { AdvancedPaginationComponent } from "@/features/lib/components/advanced-pagination/advanced-pagination.component"
import { BasicPaginationComponent } from "@/features/lib/components/basic-pagination/basic-pagination.component"
import { CustomPaginationComponent } from "@/features/lib/components/custom-pagination/custom-pagination.component"
import { DisabledPaginationComponent } from "@/features/lib/components/disabled-pagination/disabled-pagination.component"
import { PaginationAlignmentComponent } from "@/features/lib/components/pagination-alignment/pagination-alignment.component"
import { PaginationGlobalComponent } from "@/features/lib/components/pagination-global/pagination-global.component"
import { PaginationSizeComponent } from "@/features/lib/components/pagination-size/pagination-size.component"

export class PaginationExamplesPageComponent implements IComponentController {
    public readonly examples = {
        basic: { html: BasicPaginationComponent.$factory.templateUrl, typescript: basicPaginationTs },
        advanced: { html: AdvancedPaginationComponent.$factory.templateUrl, typescript: advancedPaginationTs },
        custom: { html: CustomPaginationComponent.$factory.templateUrl, typescript: customPaginationTs },
        size: { html: PaginationSizeComponent.$factory.templateUrl, typescript: paginationSizeTs },
        alignment: { html: PaginationAlignmentComponent.$factory.templateUrl, typescript: paginationAlignmentTs },
        disabled: { html: DisabledPaginationComponent.$factory.templateUrl, typescript: disabledPaginationTs },
        global: { html: PaginationGlobalComponent.$factory.templateUrl, typescript: paginationGlobalTs },
    }

    static get $name() {
        return "docsPaginationExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PaginationExamplesPageComponent,
            templateUrl: "./pagination-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
