import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { buttons } from "../lib/navigation"
import { useState } from "react";

type NavButtonProps = {
  children: any,
  href: string,
  blank: boolean,
}

function NavButton({ children, href, blank }: NavButtonProps) {
  return (
    <Link href={href}>
      {blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href} >
          {children}
        </a>
      )}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  return (
    <>
      <button className={`${styles.button} ${styles.toggle}`} onClick={() => setVisible(!visible)}>
        a
      </button>

      <nav className={`${visible || styles.hide} ${styles.header}`}>
        <div className={utilStyles.container}>
          <div className={styles.navbar}>

            <button className={styles.button} onClick={() => setVisible(!visible)}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
            </button>

            <ul className={styles.list}>
              {buttons.map((button) => (
                <li
                  className={`${styles.tab} ${button.href == router.route && styles.selected}`}
                  key={button.label}
                >
                  <NavButton
                    href={button.href}
                    blank={button.blank}
                  >
                    {button.label}
                  </NavButton>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
