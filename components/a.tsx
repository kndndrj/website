import styles from "./a.module.css";
import Link from "next/link";

type AProps = {
  children: React.ReactNode
  href: string,
  blank?: boolean,
}

export default function Tag({ children, href, blank }: AProps) {
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
