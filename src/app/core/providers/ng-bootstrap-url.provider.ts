import type {IServiceProvider} from "angular";

export class NgBootstrapUrlProvider implements IServiceProvider {
    private url?: string

    public $config(url: string) {
        this.url = url
    }

    $get() {
        return this.url
    }

    static get $name() {
        return "ngBootstrapUrl"
    }

    static get $configName() {
        return "ngBootstrapUrlProvider"
    }
}

export function provideNgBootstrapUrl(config: { url: string }) {
    const providerFn = (bootstrapUrlProvider: NgBootstrapUrlProvider) => {
        bootstrapUrlProvider.$config(`${config.url}/#/`)
    }

    providerFn.$inject = [NgBootstrapUrlProvider.$configName]
    return providerFn
}
