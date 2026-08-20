import angular from "angular";
import { HeaderComponent } from "@/core/layouts/components/header/header.component"
import { MenuComponent } from "@/core/layouts/components/menu/menu.component"
import { MenuAbstractPageComponent } from "@/core/layouts/pages/menu-abstract-page/menu-abstract-page.component"
import { routing } from "@/core/layouts/layout.routes"

export const LayoutModule = angular.module("docs.layout", []);
LayoutModule.component(HeaderComponent.$name, HeaderComponent.$factory)
LayoutModule.component(MenuComponent.$name, MenuComponent.$factory)
LayoutModule.component(MenuAbstractPageComponent.$name, MenuAbstractPageComponent.$factory)
LayoutModule.config(routing)
