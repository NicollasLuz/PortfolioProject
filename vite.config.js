import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist', // Certifique-se de que a pasta de saída seja 'dist'
  },
})
