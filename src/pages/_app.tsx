import "../styles/globals.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Happy</title>

          <link rel="canonical" href="https://happy.now.sh" />
          <meta property="og:image" content="static/img/logo.png" />
          <meta content="static/img/logo.png" property="og:image" />
          <link rel="icon" type="image/svg+xml" href="static/img/logo.png" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:title" content="Happy" />
          <meta
            property="og:description"
            content="Happy - Descubra felicidade de visitar um orfanato"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="favicon.ico" />

          <meta name="theme-color" content="#29b6d1" />
          <meta
            name="description"
            content="Happy - Descubra felicidade de visitar um orfanato"
          />

          <meta name="keywords" content="Happy, orfanato, NLW" />

          <meta property="og:url" content="https://happy.now.sh" />
          <base href="/" />
          <link href="https://plus.google.com/+hebertcisco" rel="publisher" />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content="global" name="distribution" />
          <meta content="general" name="rating" />
          <meta content="website" property="og:type" />
          <meta content="Happy" property="og:site_name" />
          <meta content="pt_BR" property="og:locale" />
          <meta content="pt_PT" property="og:locale:alternate" />
          <meta content="pt" property="og:locale:alternate" />
          <meta content="en_US" property="og:locale:alternate" />
          <meta content="id_ID" property="og:locale:alternate" />
          <meta content="Happy" property="og:title" />
          <meta content="https://happy.now.sh/" property="og:url" />
          <meta
            content="Happy - Descubra felicidade de visitar um orfanato"
            property="og:description"
          />
          <meta content="@hebertbarros" name="twitter:site" />
          <meta content="@hebertsoftware" name="twitter:creator" />
          <meta content="hebertbarros.now.sh" name="twitter:domain" />

          <meta content="/img/logo.png" property="og:image" />
          <meta content="1200" property="og:image:width" />
          <meta content="720" property="og:image:height" />
          <meta content="id" name="geo.country" />
          <meta content="Brazil" name="geo.placename" />

          <link rel="icon" type="image/svg+xml" href="/img/logo.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
