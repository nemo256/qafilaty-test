import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/layouts/Layout'
import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import '@fontsource/roboto/500.css'


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          backgroundColor: '#F3F3F3',
          '& h1': {
            color: 'black'
          }
        }
      }
    }
  }
});


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.asPath == '/login')  {
     return (
       <ThemeProvider theme={theme}>
         <Component {...pageProps} />
       </ThemeProvider>
     )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
