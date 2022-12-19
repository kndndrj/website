import Layout from "../components/layout"
import { getAllProjectIds, getProjectData, ProjectData } from "../lib/projects"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import A from "../components/a"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

  console.log(contents)

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section className={utilStyles.markdown}>
        {contents.map(({ id, title, url, contentHtml }) => (
          <article id={id} key={id}>
            <h2 className={utilStyles.headingSubtitle}>
              {title}
            </h2>
            <small className={utilStyles.lightText}>
              <button onClick={() => { setOpen(!isOpen); setGhId(title) }}>More</button>
              <A href={url} blank><FontAwesomeIcon icon={["fab", "github"]} />Git</A>
            </small>
            <div className={utilStyles.markdownHtmlContents} dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        ))}

        <SideBar visible={isOpen} setVisible={setOpen}>
          <GHReadme id={ghId} />
        </SideBar>

      </section>
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
