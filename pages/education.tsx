import Layout from "../components/layout"
import { getContents, MarkdownData, ContentType } from "../lib/contents"
import Head from "next/head"
import Md from "../components/md";

type ProjectsPageProps = {
  contents: MarkdownData[]
}

export default function Education({ contents }: ProjectsPageProps) {
  return (
    <Layout>
      <Head>
        <title>Education</title>
      </Head>
      <section>
        {contents.map((content) => (
            content.url ? (
              <Md key={content.id} markdown={content} buttonFunc={() => { window.open(content.url, "_blank") }} />
            ) : (
              <Md key={content.id} markdown={content} />
            )
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const contents = await getContents(ContentType.Education)

  return {
    props: {
      contents
    }
  }
}
