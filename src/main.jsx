import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Anchor-click handler: sets the inertia scroll engine's target
// so navigation links glide smoothly instead of instant-jumping.
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    // Dispatch a custom event that the inertia hook listens for
    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
    window.dispatchEvent(
      new CustomEvent('smoothScrollTo', { detail: { y: offsetTop } })
    );
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

