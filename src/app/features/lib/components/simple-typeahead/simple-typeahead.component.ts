import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export class SimpleTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? [] : STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())).slice(0, 10)),
    );
    static get $name() { return "docsSimpleTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: SimpleTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/simple-typeahead/simple-typeahead.component.html" }
    }
}
