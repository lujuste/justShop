import { AppBar, Typography, Toolbar, Container, Link } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

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
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Juste Shop</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart">
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login">
                <Link>Login</Link>
              </NextLink>
            </div>
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
