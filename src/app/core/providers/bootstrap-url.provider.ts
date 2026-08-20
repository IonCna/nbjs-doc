import type {IServiceProvider} from "angular";

export class BootstrapUrlProvider implements IServiceProvider {
    private url?: string

    public $config(url: string) {
        this.url = url
    }

    $get() {
        return this.url
    }

    static get $name() {
        return "bootstrapUrl"
    }

    static get $configName() {
        return "bootstrapUrlProvider"
    }
}

export function provideBootstrapUrl(config: { url: string, version: number }) {
    const providerFn = (bootstrapUrlProvider: BootstrapUrlProvider) => {
        bootstrapUrlProvider.$config(`${config.url}/docs/${config.version}/`)
    }

    providerFn.$inject = [BootstrapUrlProvider.$configName]
    return providerFn
}
