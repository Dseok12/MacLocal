import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
// import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let store = createStore(() => { return [{ key: "value" }] });
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
