import { gql, useMutation } from '@apollo/client'
import * as React from 'react'
import {
  Alert,
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
import Router from 'next/router'

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
  const [error, setError] = React.useState('')

  const AUTH_USER = gql`
    mutation AuthUser ($email: String!, $password: String!) {
      authenticateUser (content : { email: $email, password: $password }) {
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

    if (formData.get('email') == '' && formData.get('password') == '') {
      setError('Empty fields!')
    } else if (formData.get('email') == '') {
      setError('Empty email!')
    } else if (formData.get('password') == '') {
      setError('Empty password!')
    } else {
      console.log('here')
      authUser({
        variables: {
          email: formData.get('email'),
          password: formData.get('password')
        }
      })
    }

    if (data?.authenticateUser?.token) {
      Router.push('/')
    } else {
      let error = 'Something went wrong'
    }
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
          { error && <Alert severity="error">{ error }</Alert> }
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
              name='password'
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
