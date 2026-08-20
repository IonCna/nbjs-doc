import angular, {type IComponentController, type IComponentOptions} from "angular";
import {NgbModal} from "ngb-js"
import {TemplateRef, ViewChild} from "ngjs-core"
import {ThemeService} from "@/core/services/theme.service"
import {ThemeEnumConstant, type Themes} from "@/core/constants/themes.constant.ts";
import { MenuService } from "@/core/services/menu.service"

export class HeaderComponent implements IComponentController{

    @ViewChild("searchModal", { static: true })
    private searchTemplate!: TemplateRef<any>;

    constructor(
        private modalService: NgbModal,
        public themeService: ThemeService,
        public themes: typeof Themes,
        public menuService: MenuService,
    ) {}

    public openModal() {
        this.modalService.open(this.searchTemplate, {
            fullscreen: "md",
            animation: false
        }).then(angular.noop)
    }

    static get $name() {
        return "docsHeader"
    }

    static get $inject() {
        return [
            NgbModal.$name,
            ThemeService.$name,
            ThemeEnumConstant.$key,
            MenuService.$name
        ]
    }

    static get $factory(): IComponentOptions {
        return {
            controllerAs: "$",
            controller: HeaderComponent,
            templateUrl: "src/app/core/layouts/components/header/header.component.html"
        }
    }
}