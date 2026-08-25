import { defineConfig, searchForWorkspaceRoot } from 'vite'
import templatesCache from '@rollup-extras/plugin-angularjs-template-cache'

export default defineConfig({
    base: '/ngb-js-docs/',
    build: {
        outDir: './docs',
    },
    plugins: [
        templatesCache({
            templates: './src/app/features/components/pages/alert-page/*.html',
            rootDir: './src/app',
            angularModule: 'docs.alert.templates',
            module: 'docs-alert-templates',
            standalone: true,
            // The plugin passes Windows paths to addWatchFile using backslashes,
            // which Vite 8 treats as imports while serving virtual modules.
            watch: false,
        }),
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
