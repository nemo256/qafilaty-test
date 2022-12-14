import { gql, useQuery, useMutation } from '@apollo/client'
import * as React from 'react'
import {
  Alert,
  Button,
  Box,
  Divider,
  Modal,
  Menu,
  MenuItem,
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Stack,
  Chip,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

// custom imports
import ContainedButton from '../ContainedButton'
import Users from './Users'


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
  '#B8F1B0'
]


export default function CardGrid() {
  const users = Users()

  // update a user
  const UPDATE_USER = gql`
    mutation UpdateUser (
      $id_person: ID!,
      $user_name: String,
      $newPassword: String,
      $first_name: String,
      $last_name: String,
      $email: String,
      $phone01: String,
      $phone02: String,
      $address: String,
      $city: String
    ) {
      updateUser (
        id_person: $id_person,
        content: {
          user_name: $user_name,
          newPassword: $newPassword,
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
          status
        }
      }
  `

  // delete a user
  const DELETE_USER = gql`
    mutation DeleteUser ($id_person: ID!) {
      deleteUser (id_person: $id_person) {
        status
      }
    }
  `


  const [updateUser, {}] = useMutation(UPDATE_USER)
  const [deleteUser, {}] = useMutation(DELETE_USER)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [cc, setCc] = React.useState(null)
  const open = Boolean(anchorEl)

  // for the modal (update user)
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  // notification
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [severity, setSeverity] = React.useState('info')

  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  }

  const handleSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  const handleClick = (e, user) => {
    setAnchorEl(e.currentTarget)
    setCc(user)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setCc(null)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(cc.person.id)

    try {
      updateUser({
        variables: {
          id_person: cc.person.id,
          user_name: formData.get('user_name'),
          newPassword: formData.get('newPassword'),
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
      setMessage('Updated successfully!')
      setSeverity('success')
      handleSnackbarClick()
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = () => {
    handleClose()
    try {
      deleteUser({
        variables: {
          id_person: cc.person.id
        }
      })
    setMessage('Deleted successfully!')
    setSeverity('error')
    handleSnackbarClick()
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <Grid 
        container 
        pr={{ xs: 0, sm: 1, md: 0 }}
        spacing={2} 
        columns={{ xs: 1, sm: 8, md: 10, lg: 12 }}
      >
        {users && users.allUsers.map((user, id) => (
          <Grid item xs={2} sm={4} md={4} key={user.id}>
            <Card elevation={0}>
              <CardHeader
                avatar={
                  <Avatar 
                    sx={{ bgcolor: colors[Math.floor(Math.random()*colors.length)] }} 
                    aria-label='recipe'
                  >
                    { user.person.last_name.charAt(0).toUpperCase() }
                  </Avatar>
                }
                action={
                  <>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={(e) => { handleClick(e, user) }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      elevation={1}
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleModalOpen}>
                        Update
                      </MenuItem>
                      <MenuItem onClick={handleDelete}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </>
                }
                title={ user.person.first_name + ' ' + user.person.last_name }
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
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
          { message }
        </Alert>
      </Snackbar>
      { cc && (
        <Modal
          keepMounted
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby='keep-mounted-modal-title'
          aria-describedby='keep-mounted-modal-description'
        >
          <Box component='form' onSubmit={handleUpdate} sx={style}>
            <Stack direction='column' spacing={2} height='100%' justifyContent='space-between'>
              <Stack direction='column' spacing={2}>
                <Stack direction='row' spacing={1}>
                  <AddIcon /> 
                  <Typography>
                    Update User
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
                    <TextField fullWidth name='user_name' defaultValue={cc.user_name} size='small' id='outlined-basic' label='Username' variant='outlined' />
                    <TextField fullWidth name='newPassword' type='password' size='small' id='outlined-password-input' label='Password' variant='outlined' />
                  </Stack>
                  <Divider my={4} />
                  <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                    <TextField fullWidth name='first_name' defaultValue={cc.person.first_name} size='small' id='outlined-basic' label='First Name' variant='outlined' />
                    <TextField fullWidth name='last_name' defaultValue={cc.person.last_name} size='small' id='outlined-basic' label='Last Name' variant='outlined' />
                  </Stack>
                  <TextField fullWidth name='email' defaultValue={cc.person.email} size='small' id='outlined-basic' label='Email' variant='outlined' />
                  <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                    <TextField fullWidth name='phone01' defaultValue={cc.person.phone01} size='small' id='outlined-basic' label='Phone Number' variant='outlined' />
                    <TextField fullWidth name='phone02' defaultValue={cc.person.phone02} size='small' id='outlined-basic' label='Phone Number (optional)' variant='outlined' />
                  </Stack>
                  <Stack direction='row' spacing={1} justifyContent='space-evenly'>
                    <TextField fullWidth name='address' defaultValue={cc.person.address} size='small' id='outlined-basic' label='Address' variant='outlined' />
                    <TextField fullWidth name='city' defaultValue={cc.person.city} size='small' id='outlined-basic' label='City' variant='outlined' />
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
                    Update
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
                    onClick={handleModalClose}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      )}
    </>
  )
}
