import Layout from "../components/layout"
import { getAllProjectIds, getProjectData, ProjectData } from "../lib/projects"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/projects.module.css"
import SideBar from "../components/sidebar"
import GHReadme from "../components/gh_readme"
import { useState } from "react";

type ProjectsPageProps = {
  contents: ProjectData[]
}

export default function Projects({ contents }: ProjectsPageProps) {

  const [isOpen, setOpen] = useState(false)
  // github repo id (name)
  const [ghId, setGhId] = useState("")

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section>
        {contents.map(({ id, title, contentHtml }) => (
          <div key={id}>
            <h2 className={utilStyles.headingSubtitle}>
              {title}
              <button className={styles.button} onClick={() => { setOpen(!isOpen); setGhId(title) }}>More</button>
            </h2>
            <article id={id}>
              <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
          </div>
        ))}
      </section>

      <SideBar visible={isOpen} setVisible={setOpen}>
        <GHReadme id={ghId} />
      </SideBar>

    </Layout>
  )
}

export async function getStaticProps() {
  const projectsIds = getAllProjectIds()

  let contents: ProjectData[] = []
  for (let id of projectsIds) {
    let content = await getProjectData(id)
    contents.push(content)
  };

  return {
    props: {
      contents
    }
  }
}
