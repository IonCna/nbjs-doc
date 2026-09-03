import type {IComponentController, IComponentOptions} from "angular";
import dropdownDisabledItemsTs from "@/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.ts?raw"
import dropdownFormTs from "@/features/lib/components/dropdown-form/dropdown-form.component.ts?raw"
import dropdownGlobalTs from "@/features/lib/components/dropdown-global/dropdown-global.component.ts?raw"
import manualDropdownTs from "@/features/lib/components/manual-dropdown/manual-dropdown.component.ts?raw"
import { DropdownBodyComponent } from "@/features/lib/components/dropdown-body/dropdown-body.component"
import { DropdownButtonGroupsComponent } from "@/features/lib/components/dropdown-button-groups/dropdown-button-groups.component"
import { DropdownDisabledItemsComponent } from "@/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component"
import { DropdownFormComponent } from "@/features/lib/components/dropdown-form/dropdown-form.component"
import { DropdownGlobalComponent } from "@/features/lib/components/dropdown-global/dropdown-global.component"
import { DropdownNavbarComponent } from "@/features/lib/components/dropdown-navbar/dropdown-navbar.component"
import { ManualDropdownComponent } from "@/features/lib/components/manual-dropdown/manual-dropdown.component"
import { SimpleDropdownComponent } from "@/features/lib/components/simple-dropdown/simple-dropdown.component"

export class DropdownExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: SimpleDropdownComponent.$factory.templateUrl,
        },
        manual: {
            html: ManualDropdownComponent.$factory.templateUrl,
            typescript: manualDropdownTs,
        },
        buttonGroups: {
            html: DropdownButtonGroupsComponent.$factory.templateUrl,
        },
        disabledItems: {
            html: DropdownDisabledItemsComponent.$factory.templateUrl,
            typescript: dropdownDisabledItemsTs,
        },
        form: {
            html: DropdownFormComponent.$factory.templateUrl,
            typescript: dropdownFormTs,
        },
        body: {
            html: DropdownBodyComponent.$factory.templateUrl,
        },
        navbar: {
            html: DropdownNavbarComponent.$factory.templateUrl,
        },
        global: {
            html: DropdownGlobalComponent.$factory.templateUrl,
            typescript: dropdownGlobalTs,
        },
    }

    static get $name() {
        return "docsDropdownExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownExamplesPageComponent,
            templateUrl: "./dropdown-examples-page.component.html", styleUrl: "./dropdown-examples-page.component.css",
            controllerAs: "$",
        }
    }
}
