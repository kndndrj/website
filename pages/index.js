import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getPinnedProjectData } from "../lib/projects"
import Card from "../components/card"
import Showcase from "../components/showcase"
import A from "../components/a"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home({ allProjectData }) {
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
          <h2 className={utilStyles.headingSubtitle}>Zanimanja</h2>
          <ul>
            <li>3D modeliranje</li>
            <li>3D tisk</li>
            <li>Načrtovanje vezij</li>
            <li>Libre software</li>
            <li>Custom tipkovnice</li>
            <li>Linux</li>
            <li>Shell skripte</li>
            <li>Embedded sistemi</li>
          </ul>
        </section>
        {allProjectData.length != 0 && (
          <section className={utilStyles.headingDescription}>
            <h2 className={utilStyles.headingSubtitle}>Projekti</h2>
            <small className={utilStyles.lightText}>
              <A href="/projects"><FontAwesomeIcon icon={["fas", "hammer"]} />Vsi projekti</A>
            </small>
            <ul className={utilStyles.list}>
              {allProjectData.map(({ id, description, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <h3 className={utilStyles.headingParagraphTitle}>{title}</h3>
                  <small className={utilStyles.lightText}>
                    <p>{description}</p>
                  </small>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjectData = getPinnedProjectData()
  return {
    props: {
      allProjectData
    }
  }
}
