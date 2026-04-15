import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './providers'
import { AppRouter } from './router'
import './styles/globals.css'

const root = document.getElementById('root')
if (!root) throw new Error('#root element not found')

createRoot(root).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>
)
