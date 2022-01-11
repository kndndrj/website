import "../styles/global.css"
import {
  AnimatePresence,
  motion
} from "framer-motion"
import { pageAnimation } from "../lib/transitions"
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
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={router.route.concat(pageAnimation.name)}
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageAnimation.transition}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
    </>
  )
}
