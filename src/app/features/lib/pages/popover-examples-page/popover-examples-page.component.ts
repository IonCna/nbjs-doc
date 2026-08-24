import type {IComponentController, IComponentOptions} from "angular";

export class PopoverExamplesPageComponent implements IComponentController {
    static get $name() {
        return "docsPopoverExamplesPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverExamplesPageComponent,
            templateUrl: "/src/app/features/lib/pages/popover-examples-page/popover-examples-page.component.html",
            controllerAs: "$",
        }
    }
}
