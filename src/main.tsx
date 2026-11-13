import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const rootEl = document.getElementById('root')!
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />)
} else {
  createRoot(rootEl).render(<App />)
}
