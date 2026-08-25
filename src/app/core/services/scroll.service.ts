import type {TransitionService} from "@uirouter/angularjs";

export class ScrollService {
    constructor(
        private $transitionService: TransitionService
    ) {}

    observeScroll() {
        this.$transitionService.onSuccess({}, () => {
            window.requestAnimationFrame(() => {
                document.getElementById("docs-content-scroll")?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                })
            })
        })
    }

    static get $name() {
        return "docs.scroll.service"
    }

    static get $inject() {
        return ["$transitions"]
    }
}

export function provideScrollObserver() {
    const _ = (scrollService: ScrollService) => {
        scrollService.observeScroll()
    }

    _.$inject = [ScrollService.$name]
    return _
}
