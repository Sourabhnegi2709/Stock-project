import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/Hero.test.jsx", // Optional setup file
  },
  server: {
    port: 5174,  // Set a fixed port
  },
})