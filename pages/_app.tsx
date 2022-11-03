import React from "react";

import Layout from "@/components/layout";
import "/styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <Layout token={token}>
      <Component
        {...pageProps}
        token={token}
        setToken={setToken}
        name={name}
        setName={setName}
      />
    </Layout>
  );
}

export default MyApp;
