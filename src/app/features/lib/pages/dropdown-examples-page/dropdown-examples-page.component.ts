import type {IComponentController, IComponentOptions} from "angular";
import dropdownBodyHtml from "@/features/lib/components/dropdown-body/dropdown-body.component.html?raw"
import dropdownButtonGroupsHtml from "@/features/lib/components/dropdown-button-groups/dropdown-button-groups.component.html?raw"
import dropdownDisabledItemsHtml from "@/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.html?raw"
import dropdownDisabledItemsTs from "@/features/lib/components/dropdown-disabled-items/dropdown-disabled-items.component.ts?raw"
import dropdownFormHtml from "@/features/lib/components/dropdown-form/dropdown-form.component.html?raw"
import dropdownFormTs from "@/features/lib/components/dropdown-form/dropdown-form.component.ts?raw"
import dropdownGlobalHtml from "@/features/lib/components/dropdown-global/dropdown-global.component.html?raw"
import dropdownGlobalTs from "@/features/lib/components/dropdown-global/dropdown-global.component.ts?raw"
import dropdownNavbarHtml from "@/features/lib/components/dropdown-navbar/dropdown-navbar.component.html?raw"
import manualDropdownHtml from "@/features/lib/components/manual-dropdown/manual-dropdown.component.html?raw"
import manualDropdownTs from "@/features/lib/components/manual-dropdown/manual-dropdown.component.ts?raw"
import simpleDropdownHtml from "@/features/lib/components/simple-dropdown/simple-dropdown.component.html?raw"

export class DropdownExamplesPageComponent implements IComponentController {
    public readonly examples = {
        simple: {
            html: simpleDropdownHtml,
        },
        manual: {
            html: manualDropdownHtml,
            typescript: manualDropdownTs,
        },
        buttonGroups: {
            html: dropdownButtonGroupsHtml,
        },
        disabledItems: {
            html: dropdownDisabledItemsHtml,
            typescript: dropdownDisabledItemsTs,
        },
        form: {
            html: dropdownFormHtml,
            typescript: dropdownFormTs,
        },
        body: {
            html: dropdownBodyHtml,
        },
        navbar: {
            html: dropdownNavbarHtml,
        },
        global: {
            html: dropdownGlobalHtml,
            typescript: dropdownGlobalTs,
        },
    }

    static get $name() {
        return "docsDropdownExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
