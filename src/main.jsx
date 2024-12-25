import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/TimeFrame/TimeFrame.css'
import './components/WeatherContainer/WeatherContainer.css'
import 'rsuite/dist/rsuite-no-reset.min.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)