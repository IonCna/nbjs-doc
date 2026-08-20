import type {StateProvider} from "@uirouter/angularjs";
import { MenuAbstractPageComponent } from "@/core/layouts/pages/menu-abstract-page/menu-abstract-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.dashboard", {
        abstract: true,
        component: MenuAbstractPageComponent.$name,
    })
}

routing.$inject = ["$stateProvider"]
