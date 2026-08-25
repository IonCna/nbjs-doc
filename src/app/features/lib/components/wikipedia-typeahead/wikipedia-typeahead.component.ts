import type { IComponentController, IComponentOptions, IHttpService } from "angular";
import { catchError, debounceTime, distinctUntilChanged, from, map, of, type OperatorFunction, switchMap, tap } from "rxjs";

const WIKI_URL = "https://en.wikipedia.org/w/api.php";
type WikiResponse = [string, string[], string[], string[]];

export class WikipediaSearchService {
    constructor(private readonly $http: IHttpService) {}

    public search(term: string) {
        if (!term) return of([] as string[]);
        return from(this.$http.get<WikiResponse>(WIKI_URL, {
            params: { action: "opensearch", format: "json", origin: "*", search: term },
        })).pipe(map(response => response.data[1]));
    }

    static get $name() { return "docs.wikipedia.search.service" }
    static get $inject() { return ["$http"] }
}

export class WikipediaTypeaheadComponent implements IComponentController {
    public model = "";
    public searching = false;
    public searchFailed = false;

    constructor(private readonly wikipedia: WikipediaSearchService) {}

    public readonly search: OperatorFunction<string, string[]> = text$ => text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.searching = true),
        switchMap(term => this.wikipedia.search(term).pipe(
            tap(() => this.searchFailed = false),
            catchError(() => {
                this.searchFailed = true;
                return of([] as string[]);
            }),
        )),
        tap(() => this.searching = false),
    );

    static get $name() { return "docsWikipediaTypeahead" }
    static get $inject() { return [WikipediaSearchService.$name] }
    static get $factory(): IComponentOptions {
        return { controller: WikipediaTypeaheadComponent, controllerAs: "example", templateUrl: "src/app/features/lib/components/wikipedia-typeahead/wikipedia-typeahead.component.html" }
    }
}
