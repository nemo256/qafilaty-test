import * as React from 'react'
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel ,
  Checkbox,
  Link,
  Grid,
  Box,
  LockOutlinedIcon,
  Typography,
  Container,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LoginIcon from '@mui/icons-material/Login'
import Head from 'next/head'

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://qafilaty-test.vercel.app/'>
        Qafilaty - All rights reserved
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <>
      <Head>
        <title>Qafilaty - Login</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Qafilaty crud app clone" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            my: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box my={4}>
            <img src='qafilaty.svg' />
          </Box>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button 
              sx={{
                py: 1.3,
                mt: 2,
                mb: 2,
                backgroundColor: '#7D749E',
                '&:hover': {
                  backgroundColor: '#884FAA'
                }
              }}
              fullWidth
              type='submit'
              size='large'
              variant='contained'
              startIcon={<LoginIcon />}
            >
              Log In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ position: 'fixed', bottom: 2, mt: 4, mb: 4 }} />
      </Container>
    </>
  )
}
