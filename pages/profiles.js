import { Box } from '@mui/material'
import CardGrid from '../components/profiles/CardGrid'
import AddUser from '../components/profiles/AddUser'


export default function Profiles() {
  return (
    <>
      <Box 
        mx={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
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

