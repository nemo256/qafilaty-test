import { createTheme } from '@mui/material/styles'
import { lime } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: white,
    },
    secondary: {
      main: lime.100,
    },
    error: {
      main: red.A700,
    },
  },
})

export default theme
