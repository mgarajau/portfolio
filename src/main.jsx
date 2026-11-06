import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Os estilos globais vêm ANTES do App: assim o CSS de cada componente
// é carregado depois e pode sobrescrever as regras gerais quando precisar.
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
