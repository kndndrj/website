import styles from "./a.module.css";
import Link from "next/link";

export default function A({ children, href, blank }) {
  return (
    <div className={styles.linkButton}>
      <Link href={href}>
        {blank ? (
          <a target="_blank">
            <div>{children}</div>
          </a>
        ) : (
          <a>
            <div>{children}</div>
          </a>
        )}
      </Link>
    </div>
  );
};
