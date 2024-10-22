import {customTheme} from './assets/themes'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>,
)
