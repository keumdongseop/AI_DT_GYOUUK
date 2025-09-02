import { defineConfig } from 'vite'

export default defineConfig({
  root: './작업실',
  server: {
    port: 3000,  // 프론트엔드 포트
    watch: {
      usePolling: true,  // Better for Codespaces
      interval: 1000     // Check for changes every second
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // 백엔드 포트
        changeOrigin: true
      }
    }
  }
})