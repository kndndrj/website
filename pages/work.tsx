import Layout from "../components/layout"
import { getContents, MarkdownData, ContentType } from "../lib/contents"
import Head from "next/head"
import Md from "../components/md";

type ProjectsPageProps = {
  contents: MarkdownData[]
}

export default function Projects({ contents }: ProjectsPageProps) {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <section>
        {contents.map((content) => (
          <Md key={content.id} markdown={content} />
        ))}
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const contents = await getContents(ContentType.Work)

  return {
    props: {
      contents
    }
  }
}
