import Main from './components/home/Main'
import { gql, useQuery } from '@apollo/client'


const GET_USERS = gql`
  {
    allUsers {
      id
      user_name
    }
  }
`

export default function Home() {
  const { loading, err, data } = useQuery(GET_USERS)
  if (err) console.log(err)

  console.log(data)

  return (
    <Main />
  )
}

