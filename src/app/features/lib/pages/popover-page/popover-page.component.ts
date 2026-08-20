import type {IComponentController, IComponentOptions} from "angular";

export class PopoverPageComponent implements IComponentController {
    static get $name() {
        return "docsPopoverPage"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: PopoverPageComponent,
            templateUrl: "/src/app/features/lib/pages/popover-page/popover-page.component.html",
            controllerAs: "$",
        }
    }
}
