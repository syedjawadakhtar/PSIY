import React, { useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import mosques from "../data/mosques.yml"

function Donate(props) {
  return (
    <>
      <Head>
        <title>Donate to {props.data.name}</title>
        {props.data.donation && (<meta httpEquiv="refresh" content={`0;url=${props.data.donation.link}`} />)}
      </Head>
      <div className="mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 text-center">
        <Image
          height={64}
          width={156}
          src={props.data.branding.logo_url}
          alt={`${props.data.name} logo`}
        ></Image>
        <h1 className="mx-auto w-auto text-lg text-center my-5">Redirecting you to the donation page...</h1>
      </div>
    </>
  );
}

Donate.getInitialProps = async ({ req }) => {
  const data = mosques[ req.headers.host ] ?? mosques[ "default" ]

  return { data: data }
}

export default Donate
