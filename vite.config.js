import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Page HTML files live in /public (index.html, menu.html, space.html ...).
const pagesDir = resolve(__dirname, 'public')
const pages = readdirSync(pagesDir).filter((f) => f.endsWith('.html'))

/**
 * Multi-page setup with the HTML entries kept in /public:
 * - dev:   /menu.html are served from /public
 * - build: dist/public/menu.html is flattened to dist/menu.html
 */
function publicHtmlPages() {
  return {
    name: 'public-html-pages',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [path, query = ''] = req.url.split('?')
        const file = path === '/' ? 'index.html' : path.slice(1)
        if (file && !file.includes('/') && existsSync(resolve(pagesDir, file))) req.url = `/public/${file}${query ? `?${query}` : ''}`
        next()
      })
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'asset' && chunk.fileName.startsWith('public/') && chunk.fileName.endsWith('.html')) {
            chunk.fileName = chunk.fileName.slice('public/'.length)
            chunk.source = String(chunk.source).replaceAll('"../assets/', '"./assets/')
          }
        }
      },
    },
  }
}

export default defineConfig({
  plugins: [vue(), publicHtmlPages()],
  base: './',
  // /public holds the page HTML (processed by Vite), so it is not used as a raw copy folder
  publicDir: false,
  appType: 'mpa',
  // `npm run dev` / `npm run preview` open the home page in the default browser
  server: {
    open: '/',
  },
  preview: {
    open: '/',
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((f) => [f.replace('.html', ''), resolve(pagesDir, f)])),
    },
  },
})
