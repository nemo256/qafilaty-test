import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/layouts/Layout'
import '@fontsource/roboto/500.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
