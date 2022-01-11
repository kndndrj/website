import Layout from "../components/layout"
import { getAllProjectIds, getProjectData } from "../lib/projects"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import A from "../components/a"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Projects({ contents }) {
  return (
    <Layout>
      <Head>
        <title>Projekti</title>
      </Head>
      <section className={utilStyles.markdown}>
        {contents.map(({ id, title, url, contentHtml }) => (
          <article id={id} key={id}>
            <h2 className={utilStyles.headingSubtitle}>
              {title}
            </h2>
            <small className={utilStyles.lightText}>
              <A href={url} blank><FontAwesomeIcon icon={["fab", "github"]} />Git</A>
            </small>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllProjectIds()
  let contents = []
  for (let project of projects) {
    let content = await getProjectData(project.params.id)
    contents.push(content)
  };
  return {
    props: {
      contents
    }
  }
}
