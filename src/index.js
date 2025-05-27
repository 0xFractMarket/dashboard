import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StarknetProvider from "./config/starknetProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StarknetProvider>
      <App />
    </StarknetProvider>
  </BrowserRouter>
);
