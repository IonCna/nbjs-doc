import { defineConfig, searchForWorkspaceRoot } from 'vite'
import templatesCache from '@rollup-extras/plugin-angularjs-template-cache'

export default defineConfig({
    base: '/ngb-js-docs/',
    build: {
        outDir: './docs',
    },
    plugins: [
        templatesCache({
            templates: './src/app/**/*.html',
            rootDir: '.',
            angularModule: 'docs.templates',
            module: 'docs-templates',
            standalone: true,
            autoImport: true,
            watch: false,
        })
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
