import {type StateProvider, UrlRouterProvider} from "@uirouter/angularjs";
import { AppComponent } from "@/app.component"

export const routing = (
    $stateProvider: StateProvider,
    $urlRouterProvider: UrlRouterProvider,
) => {
    $stateProvider.state("docs", {
        abstract: true,
        component: AppComponent.$name,
    })

    $urlRouterProvider.otherwise('/')
}

routing.$inject = ["$stateProvider", "$urlRouterProvider"]
