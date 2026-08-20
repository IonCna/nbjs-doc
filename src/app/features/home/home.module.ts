import angular from "angular";

import { HomeHeroComponent } from "@/features/home/components/home-hero/home-hero.component"
import { HomePageComponent } from "@/features/home/pages/home-page/home-page.component"
import { routing } from "@/features/home/home.routes"

export const HomeModule = angular.module("docs.home", []);

HomeModule.component(HomeHeroComponent.$name, HomeHeroComponent.$factory)
HomeModule.component(HomePageComponent.$name, HomePageComponent.$factory)
HomeModule.config(routing)
