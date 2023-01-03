import Layout from "../components/layout"
import { getContents, MarkdownData, ContentType } from "../lib/contents"
import Head from "next/head"
import SideBar from "../components/sidebar"
import GHReadme from "../components/gh_readme"
import { useState } from "react";
import Md from "../components/md";

type ProjectsPageProps = {
  contents: MarkdownData[]
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
        {contents.map((content) => (
          <Md key={content.id} markdown={content} buttonFunc={() => { setOpen(!isOpen); setGhId(content.title) }} />
        ))}
      </section>

      <SideBar visible={isOpen} setVisible={setOpen}>
        <GHReadme id={ghId} />
      </SideBar>

    </Layout>
  )
}

export async function getStaticProps() {
  const contents = await getContents(ContentType.Projects)

  return {
    props: {
      contents
    }
  }
}
