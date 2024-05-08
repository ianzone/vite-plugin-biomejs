import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
createRoot(app).render(
  <StrictMode>
    <h1>Test</h1>
  </StrictMode>,
);
