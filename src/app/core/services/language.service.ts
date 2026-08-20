import {LanguageProvider} from "@/core/providers/language.provider.ts";
import type {Language} from "@/core/constants/language.constant.ts";
import {BehaviorSubject, Observable} from "rxjs";

export class LanguageService {
    private _changeLang: BehaviorSubject<Language>;
    public changeLang$: Observable<Language>;

    constructor(
        private language: Language,
    ) {
        this._changeLang = new BehaviorSubject(this.language);
        this.changeLang$ = this._changeLang.asObservable();
    }

    public selectLanguage(language: Language) {
        this._changeLang.next(language);
    }

    static get $name() {
        return "docs.language.service";
    }

    static get $inject() {
        return [LanguageProvider.$name];
    }
}
