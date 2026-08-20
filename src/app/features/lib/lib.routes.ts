import type {StateProvider} from "@uirouter/angularjs";
import { AlertPageComponent } from "@/features/lib/pages/alert-page/alert-page.component"
import { AccordionApiPageComponent } from "@/features/lib/pages/accordion-api-page/accordion-api-page.component"
import { AccordionExamplesPageComponent } from "@/features/lib/pages/accordion-examples-page/accordion-examples-page.component"
import { CarouselPageComponent } from "@/features/lib/pages/carousel-page/carousel-page.component"
import { CollapsePageComponent } from "@/features/lib/pages/collapse-page/collapse-page.component"
import { DatepickerPageComponent } from "@/features/lib/pages/datepicker-page/datepicker-page.component"
import { DropdownPageComponent } from "@/features/lib/pages/dropdown-page/dropdown-page.component"
import { ModalPageComponent } from "@/features/lib/pages/modal-page/modal-page.component"
import { NavPageComponent } from "@/features/lib/pages/nav-page/nav-page.component"
import { OffcanvasPageComponent } from "@/features/lib/pages/offcanvas-page/offcanvas-page.component"
import { PaginationPageComponent } from "@/features/lib/pages/pagination-page/pagination-page.component"
import { PopoverPageComponent } from "@/features/lib/pages/popover-page/popover-page.component"
import { ProgressbarPageComponent } from "@/features/lib/pages/progressbar-page/progressbar-page.component"
import { RatingPageComponent } from "@/features/lib/pages/rating-page/rating-page.component"
import { ScrollspyPageComponent } from "@/features/lib/pages/scrollspy-page/scrollspy-page.component"
import { TimepickerPageComponent } from "@/features/lib/pages/timepicker-page/timepicker-page.component"
import { ToastPageComponent } from "@/features/lib/pages/toast-page/toast-page.component"
import { TooltipPageComponent } from "@/features/lib/pages/tooltip-page/tooltip-page.component"
import { TypeaheadPageComponent } from "@/features/lib/pages/typeahead-page/typeahead-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.dashboard.accordion", {
        url: "/components/accordion",
        redirectTo: "docs.dashboard.accordion.examples",
        data: {
            title: "Accordion",
            tabs: [
                { name: "Examples", to: "docs.dashboard.accordion.examples" },
                { name: "Api", to: "docs.dashboard.accordion.api" },
            ],
            externalLinks: {
                bootstrap: "components/accordion/",
                ngBootstrap: "components/accordion/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.accordion.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: AccordionExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.accordion.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: AccordionApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.alert", {
        url: "/components/alert",
        component: AlertPageComponent.$name,
        data: {
            title: "Alert",
            tabs: [
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.carousel", {
        url: "/components/carousel",
        component: CarouselPageComponent.$name,
        data: {
            title: "Carousel",
            tabs: [
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.collapse", {
        url: "/components/collapse",
        component: CollapsePageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.datepicker", {
        url: "/components/datepicker",
        component: DatepickerPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.dropdown", {
        url: "/components/dropdown",
        component: DropdownPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.modal", {
        url: "/components/modal",
        component: ModalPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.nav", {
        url: "/components/nav",
        component: NavPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.offcanvas", {
        url: "/components/offcanvas",
        component: OffcanvasPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.pagination", {
        url: "/components/pagination",
        component: PaginationPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.popover", {
        url: "/components/popover",
        component: PopoverPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.progressbar", {
        url: "/components/progressbar",
        component: ProgressbarPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.rating", {
        url: "/components/rating",
        component: RatingPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.scrollspy", {
        url: "/components/scrollspy",
        component: ScrollspyPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.timepicker", {
        url: "/components/timepicker",
        component: TimepickerPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.toast", {
        url: "/components/toast",
        component: ToastPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.tooltip", {
        url: "/components/tooltip",
        component: TooltipPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })

    $stateProvider.state("docs.dashboard.typeahead", {
        url: "/components/typeahead",
        component: TypeaheadPageComponent.$name,
        data: {
            tabs: [
                { name: "Overview", to: "docs.dashboard.overview" },
                { name: "Examples", to: "docs.dashboard.examples" },
                { name: "Api", to: "docs.dashboard.api" },
            ]
        }
    })
}

routing.$inject = ["$stateProvider"]
