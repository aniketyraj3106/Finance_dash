import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure proper asset handling for deployment
    rollupOptions: {
      output: {
        manualChunks: {
          recharts: ['recharts'],
          lucide: ['lucide-react'],
        },
      },
    },
    // Optimize build size (use default minifier)
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
  // Ensure CSS is properly loaded
  css: {
    postcss: './postcss.config.js',
  },
  // Server configuration for development
  server: {
    strictPort: false,
    host: 'localhost',
  },
})
