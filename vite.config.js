import { defineConfig, loadEnv } from 'vite'

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '/'
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: normalizeBasePath(env.BASE_PATH),
    publicDir: false,
    build: {
      outDir: 'public',
      emptyOutDir: true,
    },
  }
})
