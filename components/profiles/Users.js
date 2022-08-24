import { gql, useQuery } from '@apollo/client'
import * as React from 'react'


export default function Users() {
  // fetch all clients
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

  return data
}
