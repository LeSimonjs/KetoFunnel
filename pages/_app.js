import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>FREE Keto Recipes</title>
        <meta
          name="Description"
          content="Free Keto Recipes ebook"
        />
        <link rel="shortcut icon" href="/favicon2.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
