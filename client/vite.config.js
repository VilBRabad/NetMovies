import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.m4v"],
  proxy: {
    '/': {
      target: 'https://www.youtube.com', // URL of the third-party API
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '') // optional rewrite for removing the '/api' prefix
    }
  }
})
