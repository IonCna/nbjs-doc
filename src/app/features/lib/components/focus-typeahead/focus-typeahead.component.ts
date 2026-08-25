import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, merge, type OperatorFunction, Subject } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export class FocusTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly focus$ = new Subject<string>();
    public readonly search: OperatorFunction<string, string[]> = text$ => merge(
        text$.pipe(debounceTime(200), distinctUntilChanged()),
        this.focus$,
    ).pipe(
        map(term => (term ? STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())) : STATES).slice(0, 10)),
    );
    public $onDestroy(): void { this.focus$.complete(); }
    static get $name() { return "docsFocusTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: FocusTypeaheadComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/focus-typeahead/focus-typeahead.component.html" }
    }
}
