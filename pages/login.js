import { gql, useMutation } from '@apollo/client'
import * as React from 'react'
import {
  Avatar,
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

// custom imports
import ContainedButton from '../components/ContainedButton'


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
  const AUTH_USER = gql`
    mutation AuthUser ($credentials: content!) {
      authenticateUser (credentials: $credentials) {
        token
        user {
          id
          user_name
        }
      }
    }
  `

  const [authUser, { data, loading, err }] = useMutation(AUTH_USER)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    authUser({
      variables: {
        credentials: {
          email: formData.email,
          pass: formData.pass
        }
      }
    })
  }

  return (
    <>
      <Head>
        <title>Qafilaty - Login</title>
        <link rel='icon' href='/logo.png' />
        <meta name='description' content='Qafilaty crud app clone' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            my: 'auto',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh',
            flexDirection: 'column',
            width: '80%',
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
              size='small'
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
              size='small'
              name='pass'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <ContainedButton 
              py={1.3}
              mt={3}
              mb={2}
              width='100%'
              type='submit'
              size='large'
              startIcon={<LoginIcon />}
            >
              Log In
            </ContainedButton>
          </Box>
          <Copyright sx={{
              align: 'center',
              justifyContent: 'center',
              marginTop: 'calc(10% + 60px)',
              mx: 'auto',
              width: '100%',
              position: 'fixed',
              bottom: 20,
            }}
          />
        </Box>
      </Container>
    </>
  )
}
