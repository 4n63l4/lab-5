import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/lab-5/', // <- replace <repo> with your GitHub repo name
})
