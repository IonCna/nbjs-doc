import type {StateProvider} from "@uirouter/angularjs";
import { IntroductionPageComponent } from "@/features/guide/pages/introduction-page/introduction-page.component"
import { PhilosophyPageComponent } from "@/features/guide/pages/philosophy-page/philosophy-page.component"
import { WhyNgbJsPageComponent } from "@/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.dashboard.introduction", {
        url: "/guide/introduction",
        component: IntroductionPageComponent.$name,
        data: {
            header: false,
            title: "Introduction",
            sections: [
                { id: "origin", name: "Origin" },
                { id: "what-is-ngbjs", name: "What is NgbJS?" },
                { id: "who-is-it-for", name: "Who is it for?" },
                { id: "project-status", name: "Project status" },
                { id: "installation", name: "Installation" },
                { id: "acknowledgements", name: "Acknowledgements" },
            ],
        }
    })

    $stateProvider.state("docs.dashboard.philosophy", {
        url: "/guide/philosophy",
        component: PhilosophyPageComponent.$name,
        data: {
            header: false,
            title: "Philosophy",
            sections: [
                { id: "parity-is-priority", name: "Parity is Priority" },
                { id: "what-parity-means", name: "What parity means" },
                { id: "familiar-by-design", name: "Familiar by design" },
                { id: "a-migration-bridge", name: "A migration bridge" },
                { id: "when-parity-is-hard", name: "When parity is hard" },
            ],
        }
    })

    $stateProvider.state("docs.dashboard.whyNgbJs", {
        url: "/guide/why-ngbjs",
        component: WhyNgbJsPageComponent.$name,
        data: {
            header: false,
            title: "Why NgbJS?",
            sections: [
                { id: "the-legacy-reality", name: "The legacy reality" },
                { id: "before-and-after", name: "Before and after" },
                { id: "what-it-unlocks", name: "What NgbJS unlocks" },
                { id: "when-to-use-ngbjs", name: "When to use NgbJS" },
                { id: "a-bridge-not-a-destination", name: "A bridge, not a destination" },
            ],
        }
    })
}

routing.$inject = ["$stateProvider"]
