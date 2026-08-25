import type {IComponentController, IComponentOptions} from "angular";
import {Subject, takeUntil} from "rxjs";
import { BootstrapUrlProvider } from "@/core/providers/bootstrap-url.provider"
import { NgBootstrapUrlProvider } from "@/core/providers/ng-bootstrap-url.provider"
import { TitleService } from "@/core/services/title.service"
import type {HeadingExternalLinks, HeadingSection} from "@/core/models/title.model"

export class PageOutlineComponent implements IComponentController {
    private destroyRef = new Subject<void>()
    private externalLinks?: HeadingExternalLinks

    public title?: string
    public sections: HeadingSection[] = []

    constructor(
        private titleService: TitleService,
        private bootstrapUrl: string,
        private ngBootstrapUrl: string,
    ) {}

    get bootstrapHref() {
        return this.externalLinks?.bootstrap
            ? `${this.bootstrapUrl}${this.externalLinks.bootstrap}`
            : undefined
    }

    get ngBootstrapHref() {
        return this.externalLinks?.ngBootstrap
            ? `${this.ngBootstrapUrl}${this.externalLinks.ngBootstrap}`
            : undefined
    }

    $postLink() {
        this.titleService.transition$.pipe(
            takeUntil(this.destroyRef),
        ).subscribe(data => {
            this.title = data.title
            this.sections = data.sections ?? []
            this.externalLinks = data.externalLinks
        })
    }

    $onDestroy() {
        this.destroyRef.next()
        this.destroyRef.complete()
    }

    static get $inject() {
        return [
            TitleService.$name,
            BootstrapUrlProvider.$name,
            NgBootstrapUrlProvider.$name,
        ]
    }

    static get $name() {
        return "docsPageOutline"
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: PageOutlineComponent,
            templateUrl: "src/app/shared/components/page-outline/page-outline.component.html",
        }
    }
}
