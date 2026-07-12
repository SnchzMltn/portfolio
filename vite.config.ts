import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['miltonsanchez.com', '.miltonsanchez.com', 'localhost'],
  },
  plugins: [
    react(), Sitemap({ 
      hostname: 'https://miltonsanchez.com',
      // basePath: '/',
      dynamicRoutes: ['/about', '/contact'],
    }),
  ],
  build: {
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    },
  }
})
