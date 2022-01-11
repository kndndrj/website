import styles from "./showcase.module.css"
import utilStyles from "../styles/utils.module.css"

export default function Showcase({ children }) {
  return (
    <div className={styles.showcase}>
      <div className={utilStyles.container}>
        <div className={utilStyles.mainSection}>
          {children}
        </div>
      </div>
    </div>
  )
}
