import { gql, useQuery } from '@apollo/client'
import * as React from 'react'


export default function Clients() {
  // fetch all clients
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

  return data
}
