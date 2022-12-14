import * as React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import {
  Stack,
  Box
} from '@mui/material'
import Bar from './Bar'


export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null)

  React.useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
  }, [])

  if (isAuthenticated == false) Router.push('/login')

  return (
    <>
      <Head>
        <title>Qafilaty Clone</title>
        <link rel='icon' href='/logo.png' />
        <meta name='description' content='Qafilaty crud app clone' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Stack 
        sx={{
          flexGrow: 1,
          height: 1,
          width: 1,
          align: 'center',
          justify: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          maxWidth: '1280px',
          margin: 'auto',
        }}
      >
        <Bar />
        <Box sx={{
          maxWidth: { xs: '100%', sm: '100%', md: '93%' },
            mt: 0,
            ml: { xs: 2, sm: 1, md: 9 },
            mr: 2,
            mb: 12,
          }}
        >
          { children }
        </Box>
      </Stack>
    </>
  )
}
