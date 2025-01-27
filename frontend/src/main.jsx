import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from "react-redux"
import store from '../redux/store.js'
import { SocketContextProvider } from '../context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
