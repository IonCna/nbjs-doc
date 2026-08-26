import { defineConfig, searchForWorkspaceRoot } from 'vite'
import { ngJsTemplateParser } from "ng-js-vite"

export default defineConfig({
    base: '/ngb-js-docs/',
    build: {
        outDir: './docs',
    },
    plugins: [
        ngJsTemplateParser()
    ],
    resolve: {
        tsconfigPaths: true,
        dedupe: ['angular', 'rxjs']
    },
    server: {
        fs: {
            allow: [searchForWorkspaceRoot(process.cwd()), '..']
        }
    }
})
