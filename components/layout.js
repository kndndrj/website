import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import A from "../components/a"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={utilStyles.mainSection}>
        {!home && (
          <A href="/"><FontAwesomeIcon icon={["fas", "angle-left"]} />Nazaj</A>
        )}
        {children}
      </section>
    </div>
  )
}
