export type HeadingData = {
    title: string
    header: boolean
    tabs: HeadingTab[]
    sections?: HeadingSection[]
    externalLinks?: HeadingExternalLinks
}

export type HeadingTab = {
    name: string
    to: string
}

export type HeadingSection = {
    id: string
    name: string
}

export type HeadingExternalLinks = {
    bootstrap?: string
    ngBootstrap: string
}
