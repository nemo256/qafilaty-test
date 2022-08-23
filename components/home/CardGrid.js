import { gql, useQuery } from '@apollo/client'
import * as React from 'react'
import {
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


export default function CardGrid() {
  // fetch all users
  const GET_CLIENTS = gql`
    {
      allClients {
        id
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

  const { data } = useQuery(GET_CLIENTS)

  return (
    <Grid container pr={{ xs: 0, sm: 1, md: 0 }} spacing={2} columns={{ xs: 1, sm: 8, md: 10, lg: 12 }}>

      {data && data.allClients.map((client) => (
        <Grid item xs={2} sm={4} md={4} key={client.id}>
          <Card elevation={0}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: colors[Math.floor(Math.random()*colors.length)] }} aria-label='recipe'>
                  { client.person.last_name.charAt(0).toUpperCase() }
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
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
