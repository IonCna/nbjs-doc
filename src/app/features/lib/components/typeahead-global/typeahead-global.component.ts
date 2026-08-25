import type { IComponentController, IComponentOptions } from "angular";
import { NgbTypeaheadConfig } from "ngb-js";
import { debounceTime, distinctUntilChanged, map, type OperatorFunction } from "rxjs";

const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii"];

export class TypeaheadGlobalComponent implements IComponentController {
    public model = "";
    private readonly initialConfig: Pick<NgbTypeaheadConfig, "container" | "selectOnExact" | "showHint">;

    constructor(private readonly config: NgbTypeaheadConfig) {
        this.initialConfig = {
            container: config.container,
            selectOnExact: config.selectOnExact,
            showHint: config.showHint,
        };
        config.container = "body";
        config.selectOnExact = true;
        config.showHint = true;
    }

    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? [] : STATES.filter(state => state.toLowerCase().startsWith(term.toLowerCase()))),
    );

    public $postLink(): void { this.restoreConfig(); }
    public $onDestroy(): void { this.restoreConfig(); }
    private restoreConfig(): void {
        this.config.container = this.initialConfig.container;
        this.config.selectOnExact = this.initialConfig.selectOnExact;
        this.config.showHint = this.initialConfig.showHint;
    }

    static get $name() { return "docsTypeaheadGlobal" }
    static get $inject() { return [NgbTypeaheadConfig.$name] }
    static get $factory(): IComponentOptions {
        return { controller: TypeaheadGlobalComponent, controllerAs: "example", templateUrl: "/src/app/features/lib/components/typeahead-global/typeahead-global.component.html" }
    }
}
