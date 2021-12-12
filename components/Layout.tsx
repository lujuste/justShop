import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Next Ecommerce</title>
      </Head>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Juste Shop</Typography>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </div>
    </>
  )
}

export default Layout
