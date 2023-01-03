import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { buttons } from "../lib/navigation"
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const router = useRouter()

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
  }, [visible]);

  return (
    <nav ref={ref} className={styles.header}>
      <div className={utilStyles.container}>
        <div className={styles.navbar}>

          {/* toggle */}
          <button className={`${styles.button} ${styles.toggle}`} onClick={() => setVisible(!visible)}>
            {visible ? (
              <>close</>
            ) : (
              <>open</>
            )}
          </button>

          {/* menu */}
          <ul className={`${visible || styles.hide} ${styles.menu}`}>
            {buttons.map((button) => (
              <li key={button.label}>
                <Link href={button.href}>
                  {button.blank ? (
                    <a className={`${styles.button} ${button.href == router.route && styles.selected}`} href={button.href} target="_blank" rel="noreferrer">
                      {button.label}
                    </a>
                  ) : (
                    <a className={`${styles.button} ${button.href == router.route && styles.selected}`} href={button.href} >
                      {button.label}
                    </a>
                  )}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}
