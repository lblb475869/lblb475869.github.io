import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // keep '/' since you are using a custom domain
  build: {
    outDir: 'dist', // build output directory
    sourcemap: true // optional: generate source maps for debugging
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
