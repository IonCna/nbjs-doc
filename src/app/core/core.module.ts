import angular from "angular";

import { BootstrapUrlProvider, provideBootstrapUrl } from "@/core/providers/bootstrap-url.provider"
import { NgBootstrapUrlProvider, provideNgBootstrapUrl } from "@/core/providers/ng-bootstrap-url.provider"
import { ThemeProvider, provideTheme } from "@/core/providers/theme.provider"
import { LanguageProvider, provideAppLanguage } from "@/core/providers/language.provider"

import { ThemeService } from "@/core/services/theme.service"
import { ThemeConstant, ThemeEnumConstant } from "@/core/constants/themes.constant"
import { LanguageConstant } from "@/core/constants/language.constant"
import { SearchDocumentsConstant } from "@/core/constants/search-documents.constant"
import {LanguageService} from "@/core/services/language.service";
import { MenuService } from "@/core/services/menu.service"
import { TitleService, provideTitleObserver } from "@/core/services/title.service"
import { ScrollService, provideScrollObserver } from "@/core/services/scroll.service"
import { SearchService } from "@/core/services/search.service"

import { IndexingProvider, provideIndexingEngineData } from "@/core/providers/indexing.provider.ts"
import { LayoutModule } from "@/core/layouts/layout.module"

export const CoreModule = angular.module("docs.core", [
    LayoutModule.name,
])

CoreModule.provider(BootstrapUrlProvider.$name, BootstrapUrlProvider)
CoreModule.provider(NgBootstrapUrlProvider.$name, NgBootstrapUrlProvider)

// theme
CoreModule.constant(ThemeConstant.$key, ThemeConstant.$value)
CoreModule.constant(ThemeEnumConstant.$key, ThemeEnumConstant.$value)
CoreModule.provider(ThemeProvider.$name, ThemeProvider)
CoreModule.service(ThemeService.$name, ThemeService)

//lang
CoreModule.constant(LanguageConstant.$key, LanguageConstant.$value)
CoreModule.provider(LanguageProvider.$name, LanguageProvider)
CoreModule.service(LanguageService.$name, LanguageService)

// search
CoreModule.constant(SearchDocumentsConstant.$key, SearchDocumentsConstant.$value)

CoreModule.service(MenuService.$name, MenuService)
CoreModule.service(TitleService.$name, TitleService)
CoreModule.service(ScrollService.$name, ScrollService)
CoreModule.service(SearchService.$name, SearchService)

CoreModule.provider(IndexingProvider.$name, IndexingProvider)

CoreModule.config(provideBootstrapUrl({
    url: "https://getbootstrap.com",
    version: 5.3
}))

// language provider debe de procesarse antes que provideIndexingEngine, ya que el segundo
// depende del primero
CoreModule.config(provideAppLanguage())
CoreModule.config(provideIndexingEngineData())

CoreModule.config(provideTheme())

CoreModule.config(provideNgBootstrapUrl({
    url: "https://ng-bootstrap.github.io"
}))

CoreModule.run(provideScrollObserver())
CoreModule.run(provideTitleObserver())
