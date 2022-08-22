import { gql, useQuery } from '@apollo/client'
import * as React from 'react'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Divider,
  Modal,
  IconButton,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { experimentalStyled as styled } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'

// custom imports
import ContainedButton from '../ContainedButton'
import CardGrid from './CardGrid'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '92%', md: '70%'},
  height: 'auto',
  bgcolor: 'white',
  border: '2px solid #EEEEEE',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}


export default function Main() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const GET_USERS = gql`
    {
      allUsers {
        id
        user_name
        person {
          id
          first_name
          last_name
          email
          phone01
          phone02
          address
          city
        }
      }
    }
  `

  const { data } = useQuery(GET_USERS)

  return (
    <>
      <ContainedButton 
        size='medium'
        width="{ xs: '90%', sm: '95%', md: 'auto' }"
        ml={2}
        mt='{ xs: 2, sm: 3, md: 4 }'
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add User
      </ContainedButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
          <Stack direction='column' spacing={2} height='100%' justifyContent='space-between'>
            <Stack direction='column' spacing={2}>
              <Stack direction='row' spacing={1}>
                <AddIcon /> 
                <Typography>
                  Add User
                </Typography>
              </Stack>
              <Divider />
            </Stack>
            <Stack direction='column' spacing={2} height='100%' justifyContent='flex-start'>
              <Alert severity='warning'>
                <Typography fontSize={13}>
                  Note: You must have an email address
                </Typography>
              </Alert>
              <Stack direction='column' spacing={1}>
                <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                  <TextField fullWidth size='small' id='outlined-basic' label='First Name' variant='outlined' />
                  <TextField fullWidth size='small' id='outlined-basic' label='Last Name' variant='outlined' />
                </Stack>
                <TextField fullWidth size='small' id='outlined-basic' label='Email' variant='outlined' />
                <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                  <TextField fullWidth size='small' id='outlined-basic' label='Phone Number' variant='outlined' />
                  <TextField fullWidth size='small' id='outlined-basic' label='Phone Number (optional)' variant='outlined' />
                </Stack>
                <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                  <TextField fullWidth size='small' id='outlined-basic' label='Address' variant='outlined' />
                  <TextField fullWidth size='small' id='outlined-basic' label='City' variant='outlined' />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction='column' spacing={2}>
              <Divider />
              <Stack 
                direction='row'
                spacing={2}
                height={36}
                sx={{
                  align: 'center',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }
                }}
              >
                <ContainedButton 
                  size='small'
                  variant='contained'
                  startIcon={<CheckIcon />}
                >
                  Confirm
                </ContainedButton>
                <Button 
                  size='small'
                  sx={{
                    border: '2px solid',
                    color: '#7D749E',
                    borderColor: '#7D749E',
                    backgroundColor: '#FFFFFF',
                    '&:hover': {
                      border: '2px solid',
                      color: '#7D749E',
                      borderColor: '#7D749E',
                      backgroundColor: '#DDDDDD',
                    }
                  }}
                  variant='outlined'
                  startIcon={<CloseIcon />}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      <Box sx={{ 
          mt: 6,
          mx: 'auto',
          flexGrow: 1, 
          width: '97%',
        }}
      >
        { data && <CardGrid users={data} /> }
      </Box>
    </>
  )
}
