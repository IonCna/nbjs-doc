import angular from "angular";

import { AccordionContentComponent } from "@/features/lib/components/accordion-content/accordion-content.component"
import { AccordionCustomHeaderComponent } from "@/features/lib/components/accordion-custom-header/accordion-custom-header.component"
import { AccordionGlobalComponent } from "@/features/lib/components/accordion-global/accordion-global.component"
import { AccordionSimpleComponent } from "@/features/lib/components/accordion-simple/accordion-simple.component"
import { AccordionTogglePanelsComponent } from "@/features/lib/components/accordion-toggle-panels/accordion-toggle-panels.component"
import { OnePanelAccordionComponent } from "@/features/lib/components/one-panel-accordion/one-panel-accordion.component"
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
import { routing } from "@/features/lib/lib.routes"

export const LibModule = angular.module("docs.lib", []);

LibModule.component(AccordionContentComponent.$name, AccordionContentComponent.$factory)
LibModule.component(AccordionCustomHeaderComponent.$name, AccordionCustomHeaderComponent.$factory)
LibModule.component(AccordionGlobalComponent.$name, AccordionGlobalComponent.$factory)
LibModule.component(AccordionSimpleComponent.$name, AccordionSimpleComponent.$factory)
LibModule.component(AccordionTogglePanelsComponent.$name, AccordionTogglePanelsComponent.$factory)
LibModule.component(OnePanelAccordionComponent.$name, OnePanelAccordionComponent.$factory)
LibModule.component(AlertApiPageComponent.$name, AlertApiPageComponent.$factory)
LibModule.component(AlertExamplesPageComponent.$name, AlertExamplesPageComponent.$factory)
LibModule.component(AccordionApiPageComponent.$name, AccordionApiPageComponent.$factory)
LibModule.component(AccordionExamplesPageComponent.$name, AccordionExamplesPageComponent.$factory)
LibModule.component(CarouselApiPageComponent.$name, CarouselApiPageComponent.$factory)
LibModule.component(CarouselExamplesPageComponent.$name, CarouselExamplesPageComponent.$factory)
LibModule.component(CollapseApiPageComponent.$name, CollapseApiPageComponent.$factory)
LibModule.component(CollapseExamplesPageComponent.$name, CollapseExamplesPageComponent.$factory)
LibModule.component(DatepickerApiPageComponent.$name, DatepickerApiPageComponent.$factory)
LibModule.component(DatepickerExamplesPageComponent.$name, DatepickerExamplesPageComponent.$factory)
LibModule.component(DropdownApiPageComponent.$name, DropdownApiPageComponent.$factory)
LibModule.component(DropdownExamplesPageComponent.$name, DropdownExamplesPageComponent.$factory)
LibModule.component(ModalApiPageComponent.$name, ModalApiPageComponent.$factory)
LibModule.component(ModalExamplesPageComponent.$name, ModalExamplesPageComponent.$factory)
LibModule.component(NavApiPageComponent.$name, NavApiPageComponent.$factory)
LibModule.component(NavExamplesPageComponent.$name, NavExamplesPageComponent.$factory)
LibModule.component(OffcanvasApiPageComponent.$name, OffcanvasApiPageComponent.$factory)
LibModule.component(OffcanvasExamplesPageComponent.$name, OffcanvasExamplesPageComponent.$factory)
LibModule.component(PaginationApiPageComponent.$name, PaginationApiPageComponent.$factory)
LibModule.component(PaginationExamplesPageComponent.$name, PaginationExamplesPageComponent.$factory)
LibModule.component(PopoverApiPageComponent.$name, PopoverApiPageComponent.$factory)
LibModule.component(PopoverExamplesPageComponent.$name, PopoverExamplesPageComponent.$factory)
LibModule.component(ProgressbarApiPageComponent.$name, ProgressbarApiPageComponent.$factory)
LibModule.component(ProgressbarExamplesPageComponent.$name, ProgressbarExamplesPageComponent.$factory)
LibModule.component(RatingApiPageComponent.$name, RatingApiPageComponent.$factory)
LibModule.component(RatingExamplesPageComponent.$name, RatingExamplesPageComponent.$factory)
LibModule.component(ScrollspyApiPageComponent.$name, ScrollspyApiPageComponent.$factory)
LibModule.component(ScrollspyExamplesPageComponent.$name, ScrollspyExamplesPageComponent.$factory)
LibModule.component(TimepickerApiPageComponent.$name, TimepickerApiPageComponent.$factory)
LibModule.component(TimepickerExamplesPageComponent.$name, TimepickerExamplesPageComponent.$factory)
LibModule.component(ToastApiPageComponent.$name, ToastApiPageComponent.$factory)
LibModule.component(ToastExamplesPageComponent.$name, ToastExamplesPageComponent.$factory)
LibModule.component(TooltipApiPageComponent.$name, TooltipApiPageComponent.$factory)
LibModule.component(TooltipExamplesPageComponent.$name, TooltipExamplesPageComponent.$factory)
LibModule.component(TypeaheadApiPageComponent.$name, TypeaheadApiPageComponent.$factory)
LibModule.component(TypeaheadExamplesPageComponent.$name, TypeaheadExamplesPageComponent.$factory)
LibModule.config(routing)
