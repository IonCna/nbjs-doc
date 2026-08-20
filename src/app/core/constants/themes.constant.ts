export enum Themes {
    light = 'light',
    dark = 'dark',
}

// este es la key con la que se guarda en localStorage
export class ThemeConstant {
    static readonly $key = 'theme_key'
    static readonly $value = "theme"
}

export class ThemeEnumConstant {
    static readonly $key = 'theme.enum'
    static readonly $value = Themes
}
