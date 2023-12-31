import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const baseURL = 'http://localhost:3000';
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': {
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
