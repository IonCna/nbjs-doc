import {Language, LanguageConstant} from "@/core/constants/language.constant"
import type {IServiceProvider} from "angular";

function langIsValid(lang: string): lang is Language {
    return lang.toUpperCase() in Language
}

export class LanguageProvider implements IServiceProvider {
    private _lang?: Language

    constructor(
        private readonly languageKey: string
    ) {}

    $config() {
        const saved = this._readFromLocalStorage()

        if(!saved) {
            this._lang = Language.EN_US
            return
        }

        if(!langIsValid(saved)) {
            this._lang = Language.EN_US
            return
        }

        this._lang = saved
    }

    $get() {
        return this._lang
    }

    private _readFromLocalStorage() {
        return localStorage.getItem(this.languageKey)
    }

    static get $name() {
        return "language"
    }

    static get $configName() {
        return "languageProvider"
    }

    static get $inject() {
        return [LanguageConstant.$key]
    }
}

export function provideAppLanguage() {
    const _ = (languageProvider: LanguageProvider) => {
        languageProvider.$config()
    }

    _.$inject = [LanguageProvider.$configName]
    return _
}