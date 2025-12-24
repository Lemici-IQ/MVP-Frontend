import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageKitProvider from './ImageKitProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageKitProvider>
      <App />
    </ImageKitProvider>
  </StrictMode>,
)