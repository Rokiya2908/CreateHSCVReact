import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RequestDocumentProvider } from './context/RequestDocumentContext.tsx'
import { BrowserRouter, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RequestDocumentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RequestDocumentProvider>
  </StrictMode>,
)
