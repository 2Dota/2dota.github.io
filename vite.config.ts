import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
