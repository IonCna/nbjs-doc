import type {IServiceProvider} from "angular";
import {ThemeConstant, Themes} from "@/core/constants/themes.constant"

function savedIsTheme(theme: string): theme is Themes {
    return theme in Themes;
}

export class ThemeProvider implements IServiceProvider {
    private theme?: Themes

    constructor(private readonly themeStoredKey: string) {}

    private getThemeInLocalStorage() {
        return localStorage.getItem(this.themeStoredKey);
    }

    private _getPreferredColorScheme() {
        const query = matchMedia("(prefers-color-scheme: dark)")

        if(query.matches) {
            return Themes.dark
        }

        return Themes.light
    }

    public $config() {
        const saved = this.getThemeInLocalStorage();

        if(!saved) {
            this.theme = this._getPreferredColorScheme()
            return
        }

        if(!savedIsTheme(saved)) {
            throw new Error("this theme is not valid")
        }

        this.theme = saved
    }

    $get() {
        return this.theme
    }

    static get $name() {
        return "theme"
    }

    static get $inject() {
        return [ThemeConstant.$key]
    }

    static get $configName() {
        return "themeProvider"
    }
}

export function provideTheme() {
    const providerFn = (themeProvider: ThemeProvider) => {
        themeProvider.$config()
    }

    providerFn.$inject = [ThemeProvider.$configName]
    return providerFn
}
