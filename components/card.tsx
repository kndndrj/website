import Image from "next/image";
import styles from "./card.module.css";
import utilStyles from "../styles/utils.module.css";
import A from "./a";
import { buttons } from "../lib/navigation"
import { useRouter } from "next/router";

export default function Card({ name }) {
  const router = useRouter()

  return (
    <div className={styles.centered}>
      <div className={styles.card} >
        <div className={styles.left}>
          <Image
            className={styles.image}
            src="/images/profile.jpg"
            height={350}
            width={350}
            alt={name}
          />
        </div>

        <div className={styles.right}>
          <h1 className={utilStyles.headingTitle}>{name}</h1>
          <ul className={utilStyles.list}>
            {buttons.map((button) => (
              button.href == router.route || (
                <li key={button.label}>
                  <A href={button.href} blank={button.blank} >{button.label}</A>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
