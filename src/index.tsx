import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from "./server/Provider";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
        <Provider>
            <App />
        </Provider>
   </BrowserRouter>

);

