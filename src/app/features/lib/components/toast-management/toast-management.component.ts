import type { IComponentController, IComponentOptions } from "angular";

interface ManagedToast {
    id: number;
    body: string;
    className?: string;
    delay?: number;
}

export class DocsToastService {
    public readonly toasts: ManagedToast[] = [];
    private nextId = 0;

    public show(body: string, options: Omit<ManagedToast, "id" | "body"> = {}): void {
        this.toasts.push({ id: ++this.nextId, body, ...options });
    }

    public remove(toast: ManagedToast): void {
        const index = this.toasts.indexOf(toast);
        if (index >= 0) this.toasts.splice(index, 1);
    }

    public clear(): void {
        this.toasts.length = 0;
    }

    static get $name() { return "docs.toast.service" }
}

export class ToastManagementComponent implements IComponentController {
    constructor(public readonly toastService: DocsToastService) {}

    public showStandard(): void {
        this.toastService.show("I am a standard toast.");
    }

    public showSuccess(): void {
        this.toastService.show("Your changes were saved.", { className: "bg-success text-white", delay: 8000 });
    }

    public showDanger(): void {
        this.toastService.show("The operation could not be completed.", { className: "bg-danger text-white", delay: 10000 });
    }

    public $onDestroy(): void {
        this.toastService.clear();
    }

    static get $name() { return "docsToastManagement" }
    static get $inject() { return [DocsToastService.$name] }
    static get $factory(): IComponentOptions {
        return { controller: ToastManagementComponent, controllerAs: "example", templateUrl: "./toast-management.component.html" }
    }
}
