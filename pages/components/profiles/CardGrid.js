import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Stack,
  Chip
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'


// picking a random color
const colors = [
  '#FFF38C',
  '#E9DAC1',
  '#FFB4B4',
  '#CEE5D0',
  '#DAE2B6',
  '#B2C8DF',
  '#FFDCAE',
  '#F6C6EA',
  '#FF8C8C',
  '#B8F1B0',
]


const CardGrid = ({ users }) => {
  return (
    <Grid container pr={{ xs: 0, sm: 1, md: 0 }} spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
      {users.allUsers.map((user) => (
        <Grid item xs={2} sm={4} md={4} key={user.id}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: colors[Math.floor(Math.random()*colors.length)] }} aria-label='recipe'>
                  { user.person.last_name.charAt(0).toUpperCase() }
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={ user.person.first_name}
              subheader={ user.person.email }
            />
            <Stack
              spacing={2}
              direction='row'
              sx={{
                m: 1,
                justifyContent: 'space-between',
              }}
            >
              <Chip label={ user.person.city } variant='outlined' />
              <Chip label={ user.person.phone01 } variant='contained' />
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardGrid
