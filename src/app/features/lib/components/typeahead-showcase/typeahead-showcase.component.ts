import type { IComponentController, IComponentOptions } from "angular";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const FRAMEWORKS = ["AngularJS", "Angular", "Bootstrap", "NgbJS", "ng-bootstrap", "RxJS", "UI-Router"];

export class TypeaheadShowcaseComponent implements IComponentController {
    public value = "";
    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 1 ? [] : FRAMEWORKS.filter(item => item.toLowerCase().includes(term.toLowerCase())).slice(0, 6)),
    );
    static get $name() { return "docsTypeaheadShowcase" }
    static get $factory(): IComponentOptions {
        return { controller: TypeaheadShowcaseComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/typeahead-showcase/typeahead-showcase.component.html" }
    }
}
