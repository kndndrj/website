import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Card from "../components/card";
import Showcase from "../components/showcase";

export default function IndexPage() {
  return (
    <>
      <Showcase />
      <Card name="Andrej Kenda" />
    </>
  );
}
