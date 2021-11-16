import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    vue(),
    Components({})
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})

