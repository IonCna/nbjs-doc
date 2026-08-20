import angular from "angular";
import {ThemeConstant, Themes} from "@/core/constants/themes.constant";
import {ThemeProvider} from "@/core/providers/theme.provider"

export class ThemeService {
    private _element = angular.element(document.documentElement);

    constructor(
        private _currentTheme: Themes,
        private readonly themeStorageKey: string
    ) {
        this._applyTheme(this._currentTheme)
    }

    static get $inject() {
        return [ThemeProvider.$name, ThemeConstant.$key];
    }

    get activeTheme(): Themes {
        return this._currentTheme;
    }

    public toggle() {
        this._currentTheme = this._currentTheme === Themes.light ? Themes.dark : Themes.light;
        this._applyTheme(this._currentTheme)
    }

    public setActive(theme: Themes) {
        this._applyTheme(theme);
    }

    private _applyTheme(theme: Themes) {
        this._currentTheme = theme;

        this._element.attr('data-bs-theme', this._currentTheme);
        this.saveInLocalStorage(this._currentTheme)
    }

    private saveInLocalStorage(value: string) {
        localStorage.setItem(this.themeStorageKey, value)
    }

    static get $name() {
        return 'docs.theme.service';
    }
}