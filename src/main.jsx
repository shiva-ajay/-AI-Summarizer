// main file (e.g., index.js or main.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './services/store.js'; // Import the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Pass the store to the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
