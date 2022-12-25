import "../styles/global.css"
import Navbar from "../components/navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
