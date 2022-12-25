import Layout from "../components/layout"
import { getAllProjectIds, getProjectData, ProjectData } from "../lib/projects"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import SideBar from "../components/sidebar"
import GHReadme from "../components/gh_readme"
import { useState } from "react";

type ProjectsPageProps = {
  contents: ProjectData[]
}

export default function Projects({ contents }: ProjectsPageProps) {

  const [isOpen, setOpen] = useState(false)
  // github repo id
  const [ghId, setGhId] = useState("")

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section className={utilStyles.markdown}>
        {contents.map(({ id, title, contentHtml }) => (
          <article id={id} key={id}>
            <h2 className={utilStyles.headingSubtitle}>
              {title}
            </h2>
            <button onClick={() => { setOpen(!isOpen); setGhId(title) }}>More</button>
            <div className={utilStyles.markdownHtmlContents} dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
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
