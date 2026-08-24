import type {IComponentController, IComponentOptions} from "angular";

export class PopoverApiPageComponent implements IComponentController {
    static get $name() {
        return "docsPopoverApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverApiPageComponent,
            templateUrl: "/src/app/features/lib/pages/popover-api-page/popover-api-page.component.html",
            controllerAs: "$",
        }
    }
}
