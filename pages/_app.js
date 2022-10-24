import React from 'react'

import Layout from '/components/layout'
import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [token, setToken] = React.useState();

  return (
    <Layout token={token}>
      <Component {...pageProps} token={token} setToken={setToken} />
    </Layout>
  )
}

export default MyApp
