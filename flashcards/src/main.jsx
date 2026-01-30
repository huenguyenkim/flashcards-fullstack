import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Gắn component App vào div#root trong index.html [cite: 270, 280, 281]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)