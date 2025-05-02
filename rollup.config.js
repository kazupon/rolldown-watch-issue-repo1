import { defineConfig } from 'rollup'
import fs from 'node:fs'

export default defineConfig({
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: 'rollup-entry.js',
    },
    plugins: [
        {
            name: 'call-close-bundle',
            closeBundle() {
                console.log('call closeBundle on rollup')
                fs.writeFileSync('dist/rollup.txt', 'call closeBundle on rollup')
            }
        }
    ]
})