/* eslint-disable @next/next/no-sync-scripts */
import * as React from 'react'
import Head from 'next/head'
import { TransitionProvider } from 'context'
import { TransitionComponent } from 'components'

import 'components/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="text/javascript" src="/cci.js"></script>
      </Head>
      <TransitionProvider>
        <TransitionComponent>
          <Component {...pageProps} />
        </TransitionComponent>
      </TransitionProvider>
    </>
  )
}

export default MyApp
