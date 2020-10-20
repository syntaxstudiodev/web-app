import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import customTheme from '@theme/theme'
import NextApp from 'next/app'
import Head from 'next/head'
import React from 'react'
import '@styles/index.css'

export default class MyApp extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />

          <meta property="og:type" content="" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:card" content="" />

          <link rel="icon" type="image/png" sizes="32x32" href="" />
          <link rel="icon" type="image/png" sizes="16x16" href="" />
          <link rel="icon" type="image/png" sizes="192x16" href="" />
          <link rel="icon" href="" />
          <link rel="apple-touch-icon" href="" />
          <link rel="mask-icon" href="" color="#000" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}