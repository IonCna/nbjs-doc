import angular from "angular";

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
import { routing } from "@/features/lib/lib.routes"

export const LibModule = angular.module("docs.lib", []);

LibModule.component(AlertPageComponent.$name, AlertPageComponent.$factory)
LibModule.component(AccordionApiPageComponent.$name, AccordionApiPageComponent.$factory)
LibModule.component(AccordionExamplesPageComponent.$name, AccordionExamplesPageComponent.$factory)
LibModule.component(CarouselPageComponent.$name, CarouselPageComponent.$factory)
LibModule.component(CollapsePageComponent.$name, CollapsePageComponent.$factory)
LibModule.component(DatepickerPageComponent.$name, DatepickerPageComponent.$factory)
LibModule.component(DropdownPageComponent.$name, DropdownPageComponent.$factory)
LibModule.component(ModalPageComponent.$name, ModalPageComponent.$factory)
LibModule.component(NavPageComponent.$name, NavPageComponent.$factory)
LibModule.component(OffcanvasPageComponent.$name, OffcanvasPageComponent.$factory)
LibModule.component(PaginationPageComponent.$name, PaginationPageComponent.$factory)
LibModule.component(PopoverPageComponent.$name, PopoverPageComponent.$factory)
LibModule.component(ProgressbarPageComponent.$name, ProgressbarPageComponent.$factory)
LibModule.component(RatingPageComponent.$name, RatingPageComponent.$factory)
LibModule.component(ScrollspyPageComponent.$name, ScrollspyPageComponent.$factory)
LibModule.component(TimepickerPageComponent.$name, TimepickerPageComponent.$factory)
LibModule.component(ToastPageComponent.$name, ToastPageComponent.$factory)
LibModule.component(TooltipPageComponent.$name, TooltipPageComponent.$factory)
LibModule.component(TypeaheadPageComponent.$name, TypeaheadPageComponent.$factory)
LibModule.config(routing)
