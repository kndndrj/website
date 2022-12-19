import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const projectsDirectory = path.join(process.cwd(), "projects")

export function getAllProjectIds(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, "")
  })
}

export type ProjectData = {
  id: string,
  url: string,
  title: string,
  contentHtml: string
}

export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id: id,
    url: matterResult.data.url,
    title: matterResult.data.title,
    contentHtml: contentHtml,
  }
}
