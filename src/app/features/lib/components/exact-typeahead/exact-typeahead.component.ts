import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, map, type OperatorFunction } from "rxjs";

interface State { name: string }
const STATES: State[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"].map(name => ({ name }));

export class ExactTypeaheadComponent implements IComponentController {
    public model?: State;
    public readonly formatter = (state: State): string => state.name;
    public readonly search: OperatorFunction<string, State[]> = text$ => text$.pipe(
        debounceTime(200),
        map(term => term ? STATES.filter(state => state.name.toLowerCase().includes(term.toLowerCase())) : []),
    );
    static get $name() { return "docsExactTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: ExactTypeaheadComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/exact-typeahead/exact-typeahead.component.html" }
    }
}
