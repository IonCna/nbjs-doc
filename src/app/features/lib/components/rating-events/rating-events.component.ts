import type { IComponentController, IComponentOptions } from "angular";

export class RatingEventsComponent implements IComponentController {
    public selected = 0;
    public hovered = 0;
    public readonly = false;
    public setSelected(value: number) { this.selected = value; }
    public setHovered(value: number) { this.hovered = value; }
    static get $name() { return "docsRatingEvents" }
    static get $factory(): IComponentOptions {
        return { controller: RatingEventsComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/rating-events/rating-events.component.html" }
    }
}
