import angular from "angular";
import { CopyButtonComponent } from "@/shared/components/copy-button/copy-button.component"
import { ExampleSectionComponent } from "@/shared/components/example-section/example-section.component"
import { PageOutlineComponent } from "@/shared/components/page-outline/page-outline.component"
import { TitleHeadingComponent } from "@/shared/components/title-heading/title-heading.component"

export const SharedModule = angular.module("docs.shared", [])
SharedModule.component(CopyButtonComponent.$name, CopyButtonComponent.$factory)
SharedModule.component(ExampleSectionComponent.$name, ExampleSectionComponent.$factory)
SharedModule.component(PageOutlineComponent.$name, PageOutlineComponent.$factory)
SharedModule.component(TitleHeadingComponent.$name, TitleHeadingComponent.$factory)
