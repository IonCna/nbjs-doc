import type {IComponentController, IComponentOptions} from "angular";
import { TitleService } from "@/core/services/title.service"
import {Subject, takeUntil} from "rxjs";

export class TitleHeadingComponent implements IComponentController {
    private destroyRef = new Subject<void>();
    public title?: string
    public tabs?: unknown[]

    public visible: boolean = false

    public constructor(
        private titleService: TitleService,
    ) {}

    $postLink() {
        this.titleService.transition$.pipe(
            takeUntil(this.destroyRef)
        ).subscribe(data => {
            this.title = data.title;
            this.tabs = data.tabs;
            this.visible = data.header
        })
    }

    $onDestroy() {
        this.destroyRef.next();
        this.destroyRef.complete();
    }

    static get $inject() {
        return [TitleService.$name]
    }

    static get $name() {
        return "docsTitleHeading";
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: TitleHeadingComponent,
            templateUrl: "/src/app/shared/components/title-heading/title-heading.component.html",
        }
    }
}