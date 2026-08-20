import angular from "angular";

import { IntroductionPageComponent } from "@/features/guide/pages/introduction-page/introduction-page.component"
import { PhilosophyPageComponent } from "@/features/guide/pages/philosophy-page/philosophy-page.component"
import { WhyNgbJsPageComponent } from "@/features/guide/pages/why-ngbjs-page/why-ngbjs-page.component"
import { routing } from "@/features/guide/guide.routes"

export const GuideModule = angular.module("docs.guide", []);

GuideModule.component(IntroductionPageComponent.$name, IntroductionPageComponent.$factory)
GuideModule.component(PhilosophyPageComponent.$name, PhilosophyPageComponent.$factory)
GuideModule.component(WhyNgbJsPageComponent.$name, WhyNgbJsPageComponent.$factory)
GuideModule.config(routing)
