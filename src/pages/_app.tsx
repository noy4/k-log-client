import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
import React from 'react'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default App
