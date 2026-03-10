import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Premium smooth scroll behavior
if (typeof window !== 'undefined') {
  // Override default scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Premium smooth scroll with easing
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1200; // Slower = more premium feel
        let start = null;

        window.requestAnimationFrame(step => {
          if (start === null) start = step;
          const progress = step - start;
          
          // Ease out cubic - starts fast, ends very slow for premium feel
          const ease = 1 - Math.pow(1 - progress / duration, 3);
          
          if (progress < duration) {
            window.scrollTo(0, startPosition + distance * ease);
            window.requestAnimationFrame(step);
          } else {
            window.scrollTo(0, targetPosition);
          }
        });
      }
    });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

