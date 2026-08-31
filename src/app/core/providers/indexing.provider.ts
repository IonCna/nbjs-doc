import type {IServiceProvider} from "angular";
import { LanguageProvider } from "@/core/providers/language.provider"

import {
    SearchDocumentsConstant,
    type SearchDocument,
} from "@/core/constants/search-documents.constant"

export class IndexingProvider implements IServiceProvider {
    private data = new Map<string, Set<string>>()

    constructor(
        private languageProvider: LanguageProvider,
        private documents: SearchDocument[],
    ) {}

    public static tokenize(text: string): string[] {
        return text
            .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, "$1 $2")
            .toLowerCase()
            .replace(/[^\p{L}\s]/gu, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean)
    }

    public $config() {
        this.data = this.documents.reduce((acc, current) => {
            const context = current.translations[this.languageProvider.lang]

            const flat = Object.values(context).join(" ")
            const chunks = IndexingProvider.tokenize(flat)

            for (const chunk of chunks) {
                if(!chunk) continue
                const exist = acc.has(chunk)

                if(exist) {
                    const set = acc.get(chunk)!
                    set.add(current.id)
                    continue
                }

                const set = new Set<string>([current.id])
                acc.set(chunk, set)
            }

            return acc
        }, new Map<string, Set<string>>())

        console.log(this.data)
    }

    $get() {
        return this.data
    }

    static get $name() {
        return "indexing"
    }

    static get $configName() {
        return "indexingProvider"
    }

    static get $inject() {
        return [
            LanguageProvider.$configName,
            SearchDocumentsConstant.$key,
        ]
    }
}

export function provideIndexingEngineData() {
    const _ = (indexingProvider: IndexingProvider) => {
        indexingProvider.$config()
    }

    _.$inject = [IndexingProvider.$configName]
    return _
}
