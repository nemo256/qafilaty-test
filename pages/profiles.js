import { Box } from '@mui/material'
import CardGrid from '../components/profiles/CardGrid'
import AddUser from '../components/profiles/AddUser'


export default function Profiles() {
  return (
    <>
      <AddUser />
      <Box sx={{ 
          mt: 3,
          mx: 'auto',
          flexGrow: 1, 
          width: '97%',
        }}
      >
        <CardGrid />
      </Box>
    </>
  )
}

