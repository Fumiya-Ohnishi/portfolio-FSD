import { BrowserRouter } from 'react-router-dom'
import { type ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
