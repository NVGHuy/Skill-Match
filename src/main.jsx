import { StrictMode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import theme from './theme.js'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles //
        styles={{
          a: { textDecoration: 'none' } // Bỏ gach chân dưới các thẻ <a
        }}
      />
      <BrowserRouter>
        <App />
        <ToastContainer position='bottom-left' autoClose={2000} />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
