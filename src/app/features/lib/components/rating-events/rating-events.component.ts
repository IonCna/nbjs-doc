import type { IComponentController, IComponentOptions } from "angular";

export class RatingEventsComponent implements IComponentController {
    public selected = 0;
    public hovered = 0;
    public readonly = false;
    public setSelected(value: number) { this.selected = value; }
    public setHovered(value: number) { this.hovered = value; }
    static get $name() { return "docsRatingEvents" }
    static get $factory(): IComponentOptions {
        return { controller: RatingEventsComponent, controllerAs: "example", templateUrl: "./rating-events.component.html", styleUrl: "./rating-events.component.css" }
    }
}
