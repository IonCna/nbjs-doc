import type {StateProvider} from "@uirouter/angularjs";
import { IntroductionPageComponent } from "@/features/guide/pages/introduction-page/introduction-page.component"
import { PhilosophyPageComponent } from "@/features/guide/pages/philosophy-page/philosophy-page.component"
import { WhyNgbJsPageComponent } from "@/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.dashboard.introduction", {
        url: "/guide/introduction",
        component: IntroductionPageComponent.$name,
    })

    $stateProvider.state("docs.dashboard.philosophy", {
        url: "/guide/philosophy",
        component: PhilosophyPageComponent.$name,
    })

    $stateProvider.state("docs.dashboard.whyNgbJs", {
        url: "/guide/why-ngbjs",
        component: WhyNgbJsPageComponent.$name,
    })
}

routing.$inject = ["$stateProvider"]
