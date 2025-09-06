import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // ⚠️ 这个很重要，确保 GitHub Pages 能加载到资源
})
