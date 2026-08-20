import angular from "angular";
import { PageOutlineComponent } from "@/shared/components/page-outline/page-outline.component"
import { TitleHeadingComponent } from "@/shared/components/title-heading/title-heading.component"

export const SharedModule = angular.module("docs.shared", [])
SharedModule.component(PageOutlineComponent.$name, PageOutlineComponent.$factory)
SharedModule.component(TitleHeadingComponent.$name, TitleHeadingComponent.$factory)
