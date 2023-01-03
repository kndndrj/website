import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/card";

export default function IndexPage() {

  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <Card name="Andrej Kenda" />
    </Layout>
  );
}
