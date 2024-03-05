import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './0app/App';
import Provider from "./0app/providers/StoreProvider/Provider";
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

