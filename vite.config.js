import { defineConfig } from 'vite'

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '/'
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig(() => ({
  base: normalizeBasePath(process.env.BASE_PATH),
  publicDir: false,
  build: {
    outDir: 'public',
    emptyOutDir: true,
  },
}))
