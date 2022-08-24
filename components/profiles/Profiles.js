import { Box } from '@mui/material'
import CardGrid from './CardGrid'
import AddUser from './AddUser'


export default function Profiles() {
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
        <AddUser />
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
