import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId=''>
    <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </AuthProvider>
  </GoogleOAuthProvider>
)