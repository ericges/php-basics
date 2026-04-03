import { defineConfig } from 'vite'
import path from 'node:path'

function rawHtmlAssets() {
  return {
    name: 'raw-html-assets',
    enforce: 'post',
    transform(code, id) {
      if (!id.endsWith('.html?raw')) return

      // In the transformed module, asset paths appear inside a JS string
      // e.g. export default "...<img src=\"/src/images/heart.svg\" alt=\"Heart\">..."
      const assetRe = /\/src\/(images\/[^"\\]+)/g
      const matches = [...code.matchAll(assetRe)]
      if (!matches.length) return

      const fileDir = path.dirname(id.replace(/\?raw$/, ''))
      const seen = new Map()
      const imports = []
      let result = code
      for (const match of matches) {
        const assetPath = match[0]
        if (!seen.has(assetPath)) {
          const varName = `__asset_${seen.size}`
          seen.set(assetPath, varName)
          const absPath = path.resolve(assetPath.slice(1))
          const relPath = path.relative(fileDir, absPath).split(path.sep).join('/')
          imports.push(`import ${varName} from './${relPath}'`)
        }
        const varName = seen.get(assetPath)
        result = result.replace(assetPath, `" + ${varName} + "`)
      }

      result = imports.join('\n') + '\n' + result
      return { code: result, map: null }
    },
  }
}

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '/'
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig(() => ({
  plugins: [rawHtmlAssets()],
  base: normalizeBasePath(process.env.BASE_PATH),
  publicDir: false,
  build: {
    outDir: 'public',
    emptyOutDir: true,
  },
}))
