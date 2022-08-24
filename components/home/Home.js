import { Box } from '@mui/material'
import CardGrid from './CardGrid'
import AddClient from './AddClient'


export default function index() {
  return (
    <>
      <Box 
        sx={{
          mx: 2,
          display: { xs: "flex", sm: 'flex', md: 'block' },
          justifycontent: "center",
          alignitems: "center"
        }}
      >
        <AddClient />
      </Box>
      <Box sx={{ 
          mt: 3,
          mx: 'auto',
          flexgrow: 1, 
          width: '97%'
        }}
      >
        <CardGrid />
      </Box>
    </>
  )
}

