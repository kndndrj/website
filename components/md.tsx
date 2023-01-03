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
					<button className={styles.button} onClick={buttonFunc}>
						<svg width="20" height="20" fill="currentColor" viewBox="0 0 15 16">
							<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
						</svg>
					</button>
				)}
				{markdown.title}
			</h2>
			<article id={markdown.id}>
				<div className={styles.markdown} dangerouslySetInnerHTML={{ __html: markdown.contentHtml }} />
			</article>
		</div>
	)
}
