import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LoginIcon from '@mui/icons-material/Login';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://qafilaty-test.vercel.app/'>
        Qafilaty - all rights reserved
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
  )
}
