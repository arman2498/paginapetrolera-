import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/paginapetrolera-/', // Añadimos esto para que las rutas funcionen en GitHub Pages
})