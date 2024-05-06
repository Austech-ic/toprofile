import React from 'react'
import Head from "next/head";
import Footer from "@/components/websites/Footer/footer"

const MainLayouts = ({ children }) => {
    const title = "Toprofile";
    // if (Component.Container) {
    //   return (
    //     <>
    //       <Head>
    //         <title>{title}</title>
    //       </Head>
    //       <Component.Container>
    //         <Component {...pageProps} />
    //       </Component.Container>
  
    //     </>
    //   );
    // }



  return (
    <div>
    <React.Fragment>
      <Head>
      <link rel="icon" sizes="192x192" href="brand/head.png" />
        <link rel="icon" type="image/png" href="brand/head.png" />
        <link rel="icon" sizes="128x128" href="/brand/head.png" />
        <title>{title}</title>
      </Head>
      <body className={inter.className}>
        {children}
        </body>
    </React.Fragment>
  </div>
  )
}