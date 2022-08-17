import {
  Stack
} from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }) {
  return (
    <Stack 
      spacing={1}
      sx={{
        height: 1,
        width: 1,
        minHeight: '100vh'
      }}
    >
      <Navbar />
      { children }
      <Footer />
    </Stack>
  )
}
