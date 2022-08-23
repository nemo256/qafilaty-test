import { gql, useMutation } from '@apollo/client'
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


export default function AddUser() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // add a user
  const ADD_CLIENT = gql`
    mutation AddClient (
      $first_name: String,
      $last_name: String,
      $email: String,
      $phone01: String,
      $phone02: String,
      $address: String,
      $city: String
    ) {
      createClient (
        content: {
          person: {
            first_name: $first_name,
            last_name: $last_name,
            email: $email,
            phone01: $phone01,
            phone02: $phone02,
            address: $address,
            city: $city
          }
        }
      ) {
          id
        }
      }
  `

  const [addClient, { data, loading, err }] = useMutation(ADD_CLIENT)

  const handleSubmit = (e) => {
    event.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      addClient({
        variables: {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          email: formData.get('email'),
          phone01: formData.get('phone01'),
          phone02: formData.get('phone02'),
          address: formData.get('address'),
          city: formData.get('city'),
        }
      })
      handleClose()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <ContainedButton 
        sx={{ 
          px: { xs: 8, sm: 4, md: 4 },
          fullWidth: { xs: true, sm: true, md: false }
        }}
        size='medium'
        ml='{ xs: 0, sm: 0, md: 2 }'
        mt='{ xs: 2, sm: 3, md: 4 }'
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add Client
      </ContainedButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box component='form' onSubmit={handleSubmit} sx={style}>
          <Stack direction='column' spacing={2} height='100%' justifyContent='space-between'>
            <Stack direction='column' spacing={2}>
              <Stack direction='row' spacing={1}>
                <AddIcon /> 
                <Typography>
                  Add Client
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
                  <TextField fullWidth name='first_name' size='small' id='outlined-basic' label='First Name' variant='outlined' />
                  <TextField fullWidth name='last_name' size='small' id='outlined-basic' label='Last Name' variant='outlined' />
                </Stack>
                <TextField fullWidth name='email' size='small' id='outlined-basic' label='Email' variant='outlined' />
                <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                  <TextField fullWidth name='phone01' size='small' id='outlined-basic' label='Phone Number' variant='outlined' />
                  <TextField fullWidth name='phone02' size='small' id='outlined-basic' label='Phone Number (optional)' variant='outlined' />
                </Stack>
                <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                  <TextField fullWidth name='address' size='small' id='outlined-basic' label='Address' variant='outlined' />
                  <TextField fullWidth name='city' size='small' id='outlined-basic' label='City' variant='outlined' />
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
                  type='submit'
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
    </>
  )
}
