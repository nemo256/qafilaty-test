import React from 'react'
import {
  Stack,
  Box
} from '@mui/material'
import Bar from './Bar'
import Footer from './Footer'


export default function Layout({ children }) {
  return (
    <Stack 
      sx={{
        flexGrow: 1,
        height: 1,
        width: 1,
        minHeight: '100vh',
        maxWidth: '1280px',
      }}
    >
      <Bar />
      <Box sx={{
          maxWidth: '93%',
          mt: 0,
          mr: 12,
          ml: 2,
        }}
      >
        { children }
      </Box>
      <Footer />
    </Stack>
  )
}
