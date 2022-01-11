import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { motion, useCycle } from "framer-motion";
import { navbarAnimation } from "../lib/transitions";
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
        <motion.a
          href={href}
          target="_blank"
          whileHover={{ x: "-2%" }}
          transition={{
            type: "spring",
            duration: 0.2,
          }}
        >
          {children}
        </motion.a>
      ) : (
        <motion.a
          href={href}
          whileHover={{ x: "-2%" }}
          transition={{
            type: "spring",
            duration: 0.2,
          }}
        >
          {children}
        </motion.a>
      )}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className={styles.header}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className={utilStyles.container}
        variants={navbarAnimation}
      >
        <div className={styles.navbar}>
          <ul className={styles.list}>
            <li
              className={styles.tab}
              key="burger"
            >
              <MenuToggle toggle={() => toggleOpen()} />
            </li>
            {pages.map((page) => (
              <li
                className={`${styles.tab} ${page.href === router.route && styles.selected}`}
                key={page.label}
                onClick={() => toggleOpen()}
              >
                <NavButton href={page.href} blank={page.blank}><FontAwesomeIcon icon={page.icon} className={styles.icon} />{page.label}</NavButton>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
}
