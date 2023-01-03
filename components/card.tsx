import Image from "next/image";
import styles from "./card.module.css";
import { buttons } from "../lib/navigation"
import { useRouter } from "next/router";
import Link from "next/link";

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
          <h1 className={styles.title}>{name}</h1>
          <ul className={styles.list}>
            {buttons.map((button) => (
              button.href == router.route || (
                <li key={button.label}>
                  <Link href={button.href}>
                    {button.blank ? (
                      <a className={styles.button} target="_blank" rel="noreferrer">
                        {button.label}
                      </a>
                    ) : (
                      <a className={styles.button}>
                        {button.label}
                      </a>
                    )}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
