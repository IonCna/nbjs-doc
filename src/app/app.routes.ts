import type {StateProvider} from "@uirouter/angularjs";
import { AppComponent } from "@/app.component"

export const routing = (
    $stateProvider: StateProvider,
) => {
    $stateProvider.state("docs", {
        abstract: true,
        component: AppComponent.$name,
    })
}

routing.$inject = ["$stateProvider"]
