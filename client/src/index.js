import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {AuthContextProvider} from "store/authContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);


