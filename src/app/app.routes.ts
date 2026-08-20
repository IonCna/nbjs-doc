import type {ILocationProvider} from "angular";
import type {StateProvider} from "@uirouter/angularjs";
import { AppComponent } from "@/app.component"

export const routing = (
    $stateProvider: StateProvider,
    $locationProvider: ILocationProvider,
) => {
    $locationProvider.html5Mode(true);

    $stateProvider.state("docs", {
        abstract: true,
        component: AppComponent.$name,
    })
}

routing.$inject = ["$stateProvider", "$locationProvider"]
