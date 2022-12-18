import "../styles/global.css"
import Navbar from "../components/navbar"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, fab)

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <header>
        <Navbar router={router} />
      </header>
        <main>
            <Component {...pageProps} />
        </main>
    </>
  )
}
