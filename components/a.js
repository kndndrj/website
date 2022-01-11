import styles from "./a.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function A({ children, href, blank }) {
  return (
    <motion.div
      whileHover={{ y: "-5%" }}
      className={styles.linkButton}
      transition={{
        type: "spring",
        duration: 0.2,
      }}
    >
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
    </motion.div>
  );
};
