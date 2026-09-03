import type {IComponentController, IComponentOptions} from "angular";

export class PopoverApiPageComponent implements IComponentController {
    static get $name() {
        return "docsPopoverApiPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverApiPageComponent,
            templateUrl: "./popover-api-page.component.html", styleUrl: "./popover-api-page.component.css",
            controllerAs: "$",
        }
    }
}
