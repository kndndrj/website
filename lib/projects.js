import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const projectsDirectory = path.join(process.cwd(), "projects")

export function getPinnedProjectData() {
  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = fileNames.reduce(function(result, fileName) {
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents)

    if (matterResult.data.pinned) {
      result.push({ id, ...matterResult.data })
    }
    return result
  }, []);

  return allProjectsData
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const res = await fetch(`https://raw.githubusercontent.com/kndndrj/wiener/master/README.md`);
  const data = await res.text();

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(data)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
