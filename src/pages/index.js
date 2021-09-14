import Head from "next/head";
import React from "react";

import Home from "./home";

export default function Index({ photo }) {
  return (
    <>
      <Head>
        <title>etiquete.me</title>
        <meta property="og:url" content="http://etiquete.me" />
        <meta property="og:type" content="etiquete.me" />
        {/* <meta property="fb:app_id" content="your fb id" /> */}
        <meta property="og:title" content={photo?.title} />
        {/* <meta name="twitter:card" content="summary" /> */}
        <meta
          property="og:description"
          content="etiquete e controle tudo que precisar!"
        />
        <meta property="og:image" content={photo?.url} />
      </Head>
      <Home />;
    </>
  );
}

export const getServerSideProps = async () => {
  let photo = null;
  await fetch("https://etiquete.me/tag.png")
    .then((response) => response.json())
    .then((json) => {
      photo = json;
    });

  return {
    props: {
      photo,
    },
  };
};
