import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [ 'Barlow Semi Condensed', 'sans-serif'].join(',')
   }
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
