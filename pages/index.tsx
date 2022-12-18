import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Card from "../components/card";
import Showcase from "../components/showcase";
import A from "../components/a";

export default function IndexPage() {
  return (
    <>
      <Showcase>
        <Card name="Andrej Kenda" />
      </Showcase>
      <Layout home>
        <Head>
          <title>Andrej Kenda</title>
        </Head>
        <section className={utilStyles.headingDescription}>
          <h2 className={utilStyles.headingSubtitle}>Interests</h2>
          <ul>
            <li>Shell Scripting</li>
            <li>Embedded Systems</li>
            <li>Distributed Systems & Iac</li>
            <li>3D Modeling & 3D Printing</li>
            <li>Linux</li>
            <li>Libre Software</li>
            <li>Custom Keyboards (& Mice)</li>
          </ul>
        </section>
        <section className={utilStyles.headingDescription}>
          <h2 className={utilStyles.headingSubtitle}>Articles</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} key="erk1">
              <A href="https://erk.fe.uni-lj.si/2021/papers/kenda(pregled_programirljivih).pdf" blank={true}>
                Texas Instruments C2000 Part 1 (sl)
              </A>
            </li>
            <li className={utilStyles.listItem} key="erk2">
              <A href="https://erk.fe.uni-lj.si/2021/papers/kenda(emulacija_inkrementalnega).pdf" blank={true}>
                Texas Instruments C2000 Part 2 (sl)
              </A>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
