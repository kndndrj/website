import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import A from "../components/a"
import Navbar from "./navbar"

type LayoutProps = {
  children: any,
  home?: boolean,
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {home || (
        <header>
          <Navbar />
        </header>
      )}
      <section className={utilStyles.mainSection}>
        {home || (
          <A href="/">Back</A>
        )}
        {children}
      </section>
    </div>
  )
}
