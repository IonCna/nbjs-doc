import type {TransitionService} from "@uirouter/angularjs";
import {ReplaySubject} from "rxjs";
import type {HeadingData} from "@/core/models/title.model.ts";

export class TitleService {
    private _transition = new ReplaySubject<HeadingData>(undefined)
    public transition$ = this._transition.asObservable()

    private _currentTab?: string

    get currentTab() {
        return this._currentTab
    }

    set currentTab(tab: string | undefined) {
        this._currentTab = tab
    }

    constructor(
        private transitionService: TransitionService
    ) {}

    public observeRoute() {
        this.transitionService.onEnter({}, transition => {
            const toState = transition.to()

            const data = {
                title: toState.data?.title,
                tabs: toState.data?.tabs,
                sections: toState.data?.sections,
                externalLinks: toState.data?.externalLinks,
            }

            this._currentTab = toState.name
            this._transition.next(data)
        })
    }

    static get $name() {
        return "docs.title.service";
    }

    static get $inject() {
        return ["$transitions"];
    }
}

export function provideTitleObserver() {
    const _ = (titleService: TitleService) => {
        titleService.observeRoute()
    }

    _.$inject = [TitleService.$name]
    return _
}
