import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider} from "react-router-dom";
import router from './Routes/Routes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProviders from './Providers/AuthProviders';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>  <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
