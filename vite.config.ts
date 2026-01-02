import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['miltonsanchez.com', '.miltonsanchez.com', 'localhost'],
  },
  plugins: [react()],
  build: {
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})
