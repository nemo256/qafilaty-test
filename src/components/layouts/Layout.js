import {
  Stack
} from '@mui/material'
import Bar from './Bar'
import Footer from './Footer'


export default function Layout({ children }) {
  return (
    <Stack 
      sx={{
        height: 1,
        width: 1,
        minHeight: '100vh'
      }}
    >
      <Bar />
      { children }
      <Footer />
    </Stack>
  )
}
