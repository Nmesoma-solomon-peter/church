import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


/* Your default styles for all screen sizes */

/* Mobile devices (up to 767px) */
// @media (max-width: 767px) {
  /* CSS styles specific to small screens (e.g., smartphones) */
// }

/* Tablets (768px to 991px) */
// @media (min-width: 768px) and (max-width: 991px) {
  /* CSS styles specific to medium-sized screens (e.g., tablets) */
// }

/* Laptops and desktops (992px and above) */
// @media (min-width: 992px) {
  /* CSS styles specific to large screens (e.g., laptops and desktops) */
// }
