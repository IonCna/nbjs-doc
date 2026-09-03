import type { IComponentController, IComponentOptions } from "angular";

export class DropdownFormComponent implements IComponentController {
    public email = "";
    public remember = false;
    public submitted = false;

    public submit() {
        this.submitted = true;
    }

    static get $name() {
        return "docsDropdownForm"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: DropdownFormComponent,
            controllerAs: "example",
            templateUrl: "./dropdown-form.component.html", styleUrl: "./dropdown-form.component.css",
        }
    }
}
