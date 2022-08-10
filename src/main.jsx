import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Paths from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </React.StrictMode>
)
