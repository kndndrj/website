import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import MenuToggle from "./menu_toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const pages = [
  { icon: ["fas", "address-card"], label: "O meni", href: "/", blank: false },
  { icon: ["fas", "hammer"], label: "Projekti", href: "/projects", blank: false },
  { icon: ["fab", "github"], label: "Github", href: "https://github.com/kndndrj", blank: true },
  { icon: ["fas", "house-user"], label: "Več", href: "https://kenda.one", blank: true },
];

function NavButton({ children, href, blank }) {
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

  return (
    <nav className={styles.header}>
      <div className={utilStyles.container}>
        <div className={styles.navbar}>
          <ul className={styles.list}>
            <li
              className={styles.tab}
              key="burger"
            >
              <MenuToggle />
            </li>
            {pages.map((page) => (
              <li
                className={`${styles.tab} ${page.href === router.route && styles.selected}`}
                key={page.label}
              >
                <NavButton href={page.href} blank={page.blank}><FontAwesomeIcon icon={page.icon} className={styles.icon} />{page.label}</NavButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
