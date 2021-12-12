import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'

function Layout({ children }: any) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Next Ecommerce</title>
      </Head>
      <div>
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <Typography>Juste Shop</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer>
          <Typography className={classes.footer}>
            all rights reserved. Juste Shop
          </Typography>
        </footer>
      </div>
    </>
  )
}

export default Layout
