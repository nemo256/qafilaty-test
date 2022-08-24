import { Box } from '@mui/material'
import CardGrid from '../components/home/CardGrid'
import AddClient from '../components/home/AddClient'


export default function Index() {
  return (
    <>
      <Box 
        sx={{
          mx: 2,
          display: { xs: "flex", sm: 'flex', md: 'block' },
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AddClient />
      </Box>
      <Box sx={{ 
          mt: 3,
          mx: 'auto',
          flexGrow: 1, 
          width: '97%'
        }}
      >
        <CardGrid />
      </Box>
    </>
  )
}

