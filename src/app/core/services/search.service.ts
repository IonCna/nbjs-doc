import { Language } from "@/core/constants/language.constant"
import {
    SearchDocumentsConstant,
    type SearchDocument,
} from "@/core/constants/search-documents.constant"
import { IndexingProvider } from "@/core/providers/indexing.provider"
import { LanguageProvider } from "@/core/providers/language.provider"

const MAX_RESULTS = 8

export interface SearchResult {
    id: string
    url: string
    title: string
    content: string
}

export class SearchService {
    private readonly documentsById: Map<string, SearchDocument>

    constructor(
        private readonly index: Map<string, Set<string>>,
        documents: SearchDocument[],
        private readonly language: Language,
    ) {
        this.documentsById = new Map(documents.map(document => [document.id, document]))
    }

    public search(query: string): SearchResult[] {
        const terms = IndexingProvider.tokenize(query)

        if(terms.length !== 1) return []

        const [term] = terms
        const documentIds = new Set<string>(this.index.get(term))

        for (const [indexedTerm, ids] of this.index) {
            if(indexedTerm === term || !indexedTerm.startsWith(term)) continue

            for (const id of ids) {
                documentIds.add(id)
            }
        }

        return [...documentIds].flatMap(id => {
            const document = this.documentsById.get(id)

            if(!document) return []

            const translation = document.translations[this.language]

            return [{
                id: document.id,
                url: document.url,
                title: translation.title,
                content: translation.content,
            }]
        }).slice(0, MAX_RESULTS)
    }

    static get $name() {
        return "docs.search.service"
    }

    static get $inject() {
        return [
            IndexingProvider.$name,
            SearchDocumentsConstant.$key,
            LanguageProvider.$name,
        ]
    }
}
