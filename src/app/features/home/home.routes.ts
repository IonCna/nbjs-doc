import type {StateProvider} from "@uirouter/angularjs";
import { HomePageComponent } from "@/features/home/pages/home-page/home-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.home", {
        url: "/",
        component: HomePageComponent.$name,
    })
}

routing.$inject = ["$stateProvider"]
