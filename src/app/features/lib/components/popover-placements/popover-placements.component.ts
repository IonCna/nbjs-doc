import type { IComponentController, IComponentOptions } from "angular";

export class PopoverPlacementsComponent implements IComponentController {
    static get $name() { return "docsPopoverPlacements" }
    static get $factory(): IComponentOptions {
        return { controller: PopoverPlacementsComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/popover-placements/popover-placements.component.html" }
    }
}
