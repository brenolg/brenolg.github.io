import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Provider from './context/Provider';

const redirect = sessionStorage.getItem('redirect');

if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
