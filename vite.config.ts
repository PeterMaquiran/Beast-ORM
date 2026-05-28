import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyPackage',
      fileName: 'index'
    }
  }
})
