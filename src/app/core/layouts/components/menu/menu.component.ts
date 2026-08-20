import {type IComponentController, type IComponentOptions} from "angular";
import { NgbOffcanvasRef } from "ngb-js"

type MenuModes = "desktop" | "mobile";

export class MenuComponent implements IComponentController {
    public mode: MenuModes = "desktop";
    public ngbActiveOffcanvas?: NgbOffcanvasRef;

    static get $factory(): IComponentOptions {
        return {
            bindings: {
                mode: "@",
                ngbActiveOffcanvas: "<?",
            },
            controllerAs: "$",
            controller: MenuComponent,
            templateUrl: "src//app/core/layouts/components/menu/menu.component.html",
        }
    }

    static get $inject() {
        return []
    }

    static get $name() {
        return "docsMenu";
    }
}