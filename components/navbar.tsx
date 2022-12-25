import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import MenuToggle from "./menu_toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type PageButton = {
  icon: IconProp,
  label: string,
  href: string,
  blank: boolean,
}

const pages: PageButton[] = [
  { icon: ["fas", "address-card"], label: "O meni", href: "/", blank: false },
  { icon: ["fas", "hammer"], label: "Projekti", href: "/projects", blank: false },
  { icon: ["fab", "github"], label: "Github", href: "https://github.com/kndndrj", blank: true },
  { icon: ["fas", "house-user"], label: "Več", href: "https://kenda.one", blank: true },
];

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

  return (
    <nav className={styles.header}>
      <div className={utilStyles.container}>
        <div className={styles.navbar}>
          <MenuToggle />
          <ul className={styles.list}>
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
