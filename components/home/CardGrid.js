import { gql, useQuery, useMutation } from '@apollo/client'
import * as React from 'react'
import {
  Menu,
  MenuItem,
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Stack,
  Chip,
  Typography
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// custom imports
import Clients from './Clients'
// import UpdateClient from './UpdateClient'
// import DeleteClient from './DeleteClient'


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
  const clients = Clients()

  // delete a client
  const DELETE_CLIENT = gql`
    mutation DeleteClient ($id_person: String!) {
      deleteClient (id_person: $id_person) {
        status
      }
    }
  `

  const [deleteClient, { data, loading, error }] = useMutation(DELETE_CLIENT)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [cc, setCc] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (e, client) => {
    setAnchorEl(e.currentTarget)
    setCc(client)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleUpdate = (client) => {
    handleClose()
    console.log(cc)
    //
  }

  const handleDelete = (id) => {
    handleClose()
    try {
      deleteClient({
        variables: {
          id_person: id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid 
      container 
      pr={{ xs: 0, sm: 1, md: 0 }}
      spacing={2} 
      columns={{ xs: 1, sm: 8, md: 10, lg: 12 }}
    >
      {clients && clients.allClients.map((client, id) => (
        <Grid item xs={2} sm={4} md={4} key={client.id}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <Avatar 
                  sx={{ bgcolor: colors[Math.floor(Math.random()*colors.length)] }} 
                  aria-label='recipe'
                >
                  { client.person.last_name.charAt(0).toUpperCase() }
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
                    onClick={(e) => { handleClick(e, client) }}
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
                    <MenuItem onClick={handleUpdate}>
                      Update
                    </MenuItem>
                    <MenuItem onClick={() => { handleDelete(client.person.id) }}>
                      Delete
                    </MenuItem>
                  </Menu>
                </>
              }
              title={ client.person.first_name + ' ' + client.person.last_name }
              subheader={ client.person.email }
            />
            <Stack
              spacing={2}
              direction='row'
              sx={{
                m: 1,
                justifyContent: 'space-between',
              }}
            >
              <Chip label={ client.person.city } variant='outlined' />
              <Chip label={ client.person.phone01 } variant='contained' />
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
