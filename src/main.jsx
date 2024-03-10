import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MqttProvider } from './context/mqtt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MqttProvider>

      <App />

    </MqttProvider>

  </React.StrictMode>,
)
