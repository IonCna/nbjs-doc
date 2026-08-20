import angular from "angular";
import { GuideModule } from "@/features/guide/guide.module"
import { HomeModule } from "@/features/home/home.module"
import { LibModule } from "@/features/lib/lib.module"

export const FeaturesModule = angular.module("docs.features", [
    GuideModule.name,
    HomeModule.name,
    LibModule.name,
])
