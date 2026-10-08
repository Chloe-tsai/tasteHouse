import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { existsSync, globSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// base 的寫法:
// base: '/Repository 的名稱/'
const base = '/tasteHouse/'

// 頁面 HTML 放在 /public (index.html, menu.html, space.html ...)
const pagesDir = 'public'

/**
 * 讓 /public 裡的 HTML 當作多頁入口:
 * - dev:   /tasteHouse/menu.html 對應到 public/menu.html
 * - build: dist/public/menu.html 移到 dist/menu.html
 */
function moveOutputPlugin() {
  return {
    name: 'move-output',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [url, query] = req.url.split('?')
        if (url.startsWith(base) || `${url}/` === base) {
          const file = url.slice(base.length) || 'index.html'
          if (!file.includes('/') && existsSync(path.join(pagesDir, file))) {
            req.url = `${base}${pagesDir}/${file}${query ? `?${query}` : ''}`
          }
        }
        next()
      })
    },
    // dev 時網址是 /tasteHouse/menu.html,HTML 裡的 ../src/ 會指到 base 外面,改成從根目錄指定
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        return ctx.server ? html.replaceAll('"../src/', '"/src/') : html
      },
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'asset' && chunk.fileName.startsWith(`${pagesDir}/`) && chunk.fileName.endsWith('.html')) {
            chunk.fileName = chunk.fileName.slice(pagesDir.length + 1)
          }
        }
      },
    },
  }
}

export default defineConfig({
  base,
  plugins: [vue(), moveOutputPlugin()],
  // /public 放的是要給 Vite 處理的頁面 HTML,不當作原樣複製的靜態資料夾
  publicDir: false,
  appType: 'mpa',
  server: {
    // 啟動 server 時預設開啟的頁面
    open: base,
  },
  preview: {
    open: base,
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync(`${pagesDir}/**/*.html`).map((file) => [
          path.relative(pagesDir, file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
    },
    outDir: 'dist',
  },
})
