import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from 'marked'

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

  const metadata = matter(fileContents)

  const content = marked.parse(metadata.content)

  return {
    id: id,
    url: metadata.data.url,
    title: metadata.data.title,
    contentHtml: content,
  }
}
