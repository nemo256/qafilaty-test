import Head from 'next/head'
import Layout from '../components/layouts/Layout'


export default function Index({ children }) {
  return (
    <>
      <Head>
        <title>Qafilaty Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Qafilaty crud app clone" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        { children }
      </Layout>
    </>
  )
}
