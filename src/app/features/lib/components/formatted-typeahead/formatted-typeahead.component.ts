import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"];

export class FormattedTypeaheadComponent implements IComponentController {
    public model = "";
    public readonly formatter = (result: string): string => result.toUpperCase();
    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term ? STATES.filter(state => state.toLowerCase().includes(term.toLowerCase())) : []),
    );
    static get $name() { return "docsFormattedTypeahead" }
    static get $factory(): IComponentOptions {
        return { controller: FormattedTypeaheadComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/formatted-typeahead/formatted-typeahead.component.html" }
    }
}
