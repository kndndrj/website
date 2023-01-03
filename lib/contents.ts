import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from 'marked'

export type MarkdownData = {
  id: string,
  url: string,
  title: string,
  contentHtml: string
}

export enum ContentType {
  Projects = "projects",
  Work = "work",
  Education = "education",
}

export async function getContents(type: ContentType): Promise<MarkdownData[]> {
  const contentPath = path.join(process.cwd(), "contents", type)

  const fileNames = fs.readdirSync(contentPath)
  const ids = fileNames.map(fileName => {
    return fileName.replace(/\.md$/, "")
  })

  return ids.map(id => {
    const fullPath = path.join(contentPath, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const metadata = matter(fileContents)

    const content = marked.parse(metadata.content)

    return {
      id: id,
      url: metadata.data.url,
      title: metadata.data.title,
      contentHtml: content,
    }

  })

}
