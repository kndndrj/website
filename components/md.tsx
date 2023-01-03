import { MarkdownData } from "../lib/contents"
import styles from "./md.module.css"
import { MouseEventHandler } from "react"

type MdProps = {
	markdown: MarkdownData
	buttonFunc?: MouseEventHandler<HTMLButtonElement>
}

export default function Md({ markdown, buttonFunc }: MdProps) {

	return (
		<div key={markdown.id}>
			<h2 className={styles.title}>
				{buttonFunc && (
					<button className={styles.button} onClick={buttonFunc}>More</button>
				)}
				{markdown.title}
			</h2>
			<article id={markdown.id}>
				<div className={styles.markdown} dangerouslySetInnerHTML={{ __html: markdown.contentHtml }} />
			</article>
		</div>
	)
}
