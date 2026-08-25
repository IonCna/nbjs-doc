import type { IComponentController, IComponentOptions } from "angular";

export class NavbarCollapseComponent implements IComponentController {
    public menuCollapsed = true;

    public toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
    }

    public closeMenu() {
        this.menuCollapsed = true;
    }

    static get $name() {
        return "docsNavbarCollapse"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: NavbarCollapseComponent,
            controllerAs: "example",
            templateUrl: "src/app/features/lib/components/navbar-collapse/navbar-collapse.component.html",
        }
    }
}
