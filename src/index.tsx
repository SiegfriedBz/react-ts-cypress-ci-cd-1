import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoContextProvider } from './contextAPI/contexts/todoContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
  </React.StrictMode>
);
