import type { IComponentController, IComponentOptions } from "angular";

interface AlertExample {
    id: number;
    type: string;
    message: string;
    animation: boolean;
}

const createAlerts = (): AlertExample[] => [
    { id: 1, type: "success", message: "Your changes were saved successfully.", animation: true },
    { id: 2, type: "danger", message: "Something needs your attention.", animation: true },
    { id: 3, type: "warning", message: "This alert closes without animation.", animation: false },
    { id: 4, type: "info", message: "This one also closes immediately.", animation: false },
];

export class AlertCloseableComponent implements IComponentController {
    public alerts = createAlerts();

    public close(id: number) {
        this.alerts = this.alerts.filter((alert) => alert.id !== id);
    }

    public reset() {
        this.alerts = createAlerts();
    }

    static get $name() {
        return "docsAlertCloseable"
    }

    static get $factory(): IComponentOptions {
        return {
            controller: AlertCloseableComponent,
            controllerAs: "example",
            templateUrl: "./alert-closeable.component.html", styleUrl: "./alert-closeable.component.css",
        }
    }
}
