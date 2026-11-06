import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No GitHub Pages o site fica em https://mgarajau.github.io/portfolio/,
// então os arquivos precisam ser buscados a partir de "/portfolio/".
// Rodando no seu computador (npm run dev), continua sendo "/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
}))
