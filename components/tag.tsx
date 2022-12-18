import styles from "./tag.module.css";

type TagProps = {
  children: React.ReactNode
}

export default function A({ children }: TagProps) {
  return (
    <>
      {children &&
        <div className={styles.tag}>
          {children}
        </div>
      }
    </>
  );
};
