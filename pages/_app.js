import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/layouts/Layout'
import { useRouter } from 'next/router'
import '@fontsource/roboto/500.css'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.asPath == '/login')  {
     return (
       <Component {...pageProps} />
     )
  }

  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
