import { defineConfig } from 'rolldown'
import fs from 'node:fs'

export default defineConfig({
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: 'rolldown-entry.js',
    },
    plugins: [
        {
            name: 'call-close-bundle',
            closeBundle() {
                console.log('call closeBundle on rolldown')
                fs.writeFileSync('dist/rolldown.txt', 'call closeBundle on rolldown')
            }
        }
    ]
})