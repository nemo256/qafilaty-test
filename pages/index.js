import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import Main from './components/home/Main'


export default function Home() {
  const client = new ApolloClient({
    uri: 'https://test-api-9kapg.qafilaty.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <Main />
  )
}

