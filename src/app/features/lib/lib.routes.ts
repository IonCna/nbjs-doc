import type {StateProvider} from "@uirouter/angularjs";
import { AlertApiPageComponent } from "@/features/lib/pages/alert-api-page/alert-api-page.component"
import { AlertExamplesPageComponent } from "@/features/lib/pages/alert-examples-page/alert-examples-page.component"
import { AccordionApiPageComponent } from "@/features/lib/pages/accordion-api-page/accordion-api-page.component"
import { AccordionExamplesPageComponent } from "@/features/lib/pages/accordion-examples-page/accordion-examples-page.component"
import { CarouselApiPageComponent } from "@/features/lib/pages/carousel-api-page/carousel-api-page.component"
import { CarouselExamplesPageComponent } from "@/features/lib/pages/carousel-examples-page/carousel-examples-page.component"
import { CollapseApiPageComponent } from "@/features/lib/pages/collapse-api-page/collapse-api-page.component"
import { CollapseExamplesPageComponent } from "@/features/lib/pages/collapse-examples-page/collapse-examples-page.component"
import { DatepickerApiPageComponent } from "@/features/lib/pages/datepicker-api-page/datepicker-api-page.component"
import { DatepickerExamplesPageComponent } from "@/features/lib/pages/datepicker-examples-page/datepicker-examples-page.component"
import { DropdownApiPageComponent } from "@/features/lib/pages/dropdown-api-page/dropdown-api-page.component"
import { DropdownExamplesPageComponent } from "@/features/lib/pages/dropdown-examples-page/dropdown-examples-page.component"
import { ModalApiPageComponent } from "@/features/lib/pages/modal-api-page/modal-api-page.component"
import { ModalExamplesPageComponent } from "@/features/lib/pages/modal-examples-page/modal-examples-page.component"
import { NavApiPageComponent } from "@/features/lib/pages/nav-api-page/nav-api-page.component"
import { NavExamplesPageComponent } from "@/features/lib/pages/nav-examples-page/nav-examples-page.component"
import { OffcanvasApiPageComponent } from "@/features/lib/pages/offcanvas-api-page/offcanvas-api-page.component"
import { OffcanvasExamplesPageComponent } from "@/features/lib/pages/offcanvas-examples-page/offcanvas-examples-page.component"
import { PaginationApiPageComponent } from "@/features/lib/pages/pagination-api-page/pagination-api-page.component"
import { PaginationExamplesPageComponent } from "@/features/lib/pages/pagination-examples-page/pagination-examples-page.component"
import { PopoverApiPageComponent } from "@/features/lib/pages/popover-api-page/popover-api-page.component"
import { PopoverExamplesPageComponent } from "@/features/lib/pages/popover-examples-page/popover-examples-page.component"
import { ProgressbarApiPageComponent } from "@/features/lib/pages/progressbar-api-page/progressbar-api-page.component"
import { ProgressbarExamplesPageComponent } from "@/features/lib/pages/progressbar-examples-page/progressbar-examples-page.component"
import { RatingApiPageComponent } from "@/features/lib/pages/rating-api-page/rating-api-page.component"
import { RatingExamplesPageComponent } from "@/features/lib/pages/rating-examples-page/rating-examples-page.component"
import { ScrollspyApiPageComponent } from "@/features/lib/pages/scrollspy-api-page/scrollspy-api-page.component"
import { ScrollspyExamplesPageComponent } from "@/features/lib/pages/scrollspy-examples-page/scrollspy-examples-page.component"
import { TimepickerApiPageComponent } from "@/features/lib/pages/timepicker-api-page/timepicker-api-page.component"
import { TimepickerExamplesPageComponent } from "@/features/lib/pages/timepicker-examples-page/timepicker-examples-page.component"
import { ToastApiPageComponent } from "@/features/lib/pages/toast-api-page/toast-api-page.component"
import { ToastExamplesPageComponent } from "@/features/lib/pages/toast-examples-page/toast-examples-page.component"
import { TooltipApiPageComponent } from "@/features/lib/pages/tooltip-api-page/tooltip-api-page.component"
import { TooltipExamplesPageComponent } from "@/features/lib/pages/tooltip-examples-page/tooltip-examples-page.component"
import { TypeaheadApiPageComponent } from "@/features/lib/pages/typeahead-api-page/typeahead-api-page.component"
import { TypeaheadExamplesPageComponent } from "@/features/lib/pages/typeahead-examples-page/typeahead-examples-page.component"

export const routing = ($stateProvider: StateProvider) => {
    $stateProvider.state("docs.dashboard.alert", {
        url: "/components/alert",
        redirectTo: "docs.dashboard.alert.examples",
        data: {
            title: "Alert",
            tabs: [
                { name: "Examples", to: "docs.dashboard.alert.examples" },
                { name: "Api", to: "docs.dashboard.alert.api" },
            ],
            externalLinks: {
                bootstrap: "components/alerts/",
                ngBootstrap: "components/alert/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.alert.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: AlertExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.alert.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: AlertApiPageComponent.$name,
            },
        },
    })

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

    $stateProvider.state("docs.dashboard.carousel", {
        url: "/components/carousel",
        redirectTo: "docs.dashboard.carousel.examples",
        data: {
            title: "Carousel",
            tabs: [
                { name: "Examples", to: "docs.dashboard.carousel.examples" },
                { name: "Api", to: "docs.dashboard.carousel.api" },
            ],
            externalLinks: {
                bootstrap: "components/carousel/",
                ngBootstrap: "components/carousel/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.carousel.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: CarouselExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.carousel.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: CarouselApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.collapse", {
        url: "/components/collapse",
        redirectTo: "docs.dashboard.collapse.examples",
        data: {
            title: "Collapse",
            tabs: [
                { name: "Examples", to: "docs.dashboard.collapse.examples" },
                { name: "Api", to: "docs.dashboard.collapse.api" },
            ],
            externalLinks: {
                bootstrap: "components/collapse/",
                ngBootstrap: "components/collapse/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.collapse.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: CollapseExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.collapse.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: CollapseApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.datepicker", {
        url: "/components/datepicker",
        redirectTo: "docs.dashboard.datepicker.examples",
        data: {
            title: "Datepicker",
            tabs: [
                { name: "Examples", to: "docs.dashboard.datepicker.examples" },
                { name: "Api", to: "docs.dashboard.datepicker.api" },
            ],
            externalLinks: {
                ngBootstrap: "components/datepicker/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.datepicker.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: DatepickerExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.datepicker.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: DatepickerApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.dropdown", {
        url: "/components/dropdown",
        redirectTo: "docs.dashboard.dropdown.examples",
        data: {
            title: "Dropdown",
            tabs: [
                { name: "Examples", to: "docs.dashboard.dropdown.examples" },
                { name: "Api", to: "docs.dashboard.dropdown.api" },
            ],
            externalLinks: {
                bootstrap: "components/dropdowns/",
                ngBootstrap: "components/dropdown/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.dropdown.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: DropdownExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.dropdown.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: DropdownApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.modal", {
        url: "/components/modal",
        redirectTo: "docs.dashboard.modal.examples",
        data: {
            title: "Modal",
            tabs: [
                { name: "Examples", to: "docs.dashboard.modal.examples" },
                { name: "Api", to: "docs.dashboard.modal.api" },
            ],
            externalLinks: {
                bootstrap: "components/modal/",
                ngBootstrap: "components/modal/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.modal.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ModalExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.modal.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ModalApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.nav", {
        url: "/components/nav",
        redirectTo: "docs.dashboard.nav.examples",
        data: {
            title: "Nav",
            tabs: [
                { name: "Examples", to: "docs.dashboard.nav.examples" },
                { name: "Api", to: "docs.dashboard.nav.api" },
            ],
            externalLinks: {
                bootstrap: "components/navs-tabs/",
                ngBootstrap: "components/nav/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.nav.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: NavExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.nav.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: NavApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.offcanvas", {
        url: "/components/offcanvas",
        redirectTo: "docs.dashboard.offcanvas.examples",
        data: {
            title: "Offcanvas",
            tabs: [
                { name: "Examples", to: "docs.dashboard.offcanvas.examples" },
                { name: "Api", to: "docs.dashboard.offcanvas.api" },
            ],
            externalLinks: {
                bootstrap: "components/offcanvas/",
                ngBootstrap: "components/offcanvas/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.offcanvas.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: OffcanvasExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.offcanvas.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: OffcanvasApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.pagination", {
        url: "/components/pagination",
        redirectTo: "docs.dashboard.pagination.examples",
        data: {
            title: "Pagination",
            tabs: [
                { name: "Examples", to: "docs.dashboard.pagination.examples" },
                { name: "Api", to: "docs.dashboard.pagination.api" },
            ],
            externalLinks: {
                bootstrap: "components/pagination/",
                ngBootstrap: "components/pagination/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.pagination.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: PaginationExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.pagination.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: PaginationApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.popover", {
        url: "/components/popover",
        redirectTo: "docs.dashboard.popover.examples",
        data: {
            title: "Popover",
            tabs: [
                { name: "Examples", to: "docs.dashboard.popover.examples" },
                { name: "Api", to: "docs.dashboard.popover.api" },
            ],
            externalLinks: {
                bootstrap: "components/popovers/",
                ngBootstrap: "components/popover/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.popover.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: PopoverExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.popover.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: PopoverApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.progressbar", {
        url: "/components/progressbar",
        redirectTo: "docs.dashboard.progressbar.examples",
        data: {
            title: "Progress bar",
            tabs: [
                { name: "Examples", to: "docs.dashboard.progressbar.examples" },
                { name: "Api", to: "docs.dashboard.progressbar.api" },
            ],
            externalLinks: {
                bootstrap: "components/progress/",
                ngBootstrap: "components/progressbar/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.progressbar.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ProgressbarExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.progressbar.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ProgressbarApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.rating", {
        url: "/components/rating",
        redirectTo: "docs.dashboard.rating.examples",
        data: {
            title: "Rating",
            tabs: [
                { name: "Examples", to: "docs.dashboard.rating.examples" },
                { name: "Api", to: "docs.dashboard.rating.api" },
            ],
            externalLinks: {
                ngBootstrap: "components/rating/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.rating.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: RatingExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.rating.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: RatingApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.scrollspy", {
        url: "/components/scrollspy",
        redirectTo: "docs.dashboard.scrollspy.examples",
        data: {
            title: "Scrollspy",
            tabs: [
                { name: "Examples", to: "docs.dashboard.scrollspy.examples" },
                { name: "Api", to: "docs.dashboard.scrollspy.api" },
            ],
            externalLinks: {
                bootstrap: "components/scrollspy/",
                ngBootstrap: "components/scrollspy/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.scrollspy.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ScrollspyExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.scrollspy.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ScrollspyApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.timepicker", {
        url: "/components/timepicker",
        redirectTo: "docs.dashboard.timepicker.examples",
        data: {
            title: "Timepicker",
            tabs: [
                { name: "Examples", to: "docs.dashboard.timepicker.examples" },
                { name: "Api", to: "docs.dashboard.timepicker.api" },
            ],
            externalLinks: {
                ngBootstrap: "components/timepicker/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.timepicker.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TimepickerExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.timepicker.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TimepickerApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.toast", {
        url: "/components/toast",
        redirectTo: "docs.dashboard.toast.examples",
        data: {
            title: "Toast",
            tabs: [
                { name: "Examples", to: "docs.dashboard.toast.examples" },
                { name: "Api", to: "docs.dashboard.toast.api" },
            ],
            externalLinks: {
                bootstrap: "components/toasts/",
                ngBootstrap: "components/toast/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.toast.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ToastExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.toast.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: ToastApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.tooltip", {
        url: "/components/tooltip",
        redirectTo: "docs.dashboard.tooltip.examples",
        data: {
            title: "Tooltip",
            tabs: [
                { name: "Examples", to: "docs.dashboard.tooltip.examples" },
                { name: "Api", to: "docs.dashboard.tooltip.api" },
            ],
            externalLinks: {
                bootstrap: "components/tooltips/",
                ngBootstrap: "components/tooltip/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.tooltip.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TooltipExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.tooltip.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TooltipApiPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.typeahead", {
        url: "/components/typeahead",
        redirectTo: "docs.dashboard.typeahead.examples",
        data: {
            title: "Typeahead",
            tabs: [
                { name: "Examples", to: "docs.dashboard.typeahead.examples" },
                { name: "Api", to: "docs.dashboard.typeahead.api" },
            ],
            externalLinks: {
                ngBootstrap: "components/typeahead/overview",
            },
        }
    })

    $stateProvider.state("docs.dashboard.typeahead.examples", {
        url: "/examples",
        data: {
            sections: [
                { id: "basic-example", name: "Basic example" },
                { id: "configuration", name: "Configuration" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TypeaheadExamplesPageComponent.$name,
            },
        },
    })

    $stateProvider.state("docs.dashboard.typeahead.api", {
        url: "/api",
        data: {
            sections: [
                { id: "directives", name: "Directives" },
                { id: "services", name: "Services" },
            ],
        },
        views: {
            "$default@docs.dashboard": {
                component: TypeaheadApiPageComponent.$name,
            },
        },
    })
}

routing.$inject = ["$stateProvider"]
