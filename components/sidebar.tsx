import styles from "./sidebar.module.css";
import { Dispatch, SetStateAction, Children, cloneElement } from "react";

type SideBarProps = {
  children: any,
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}

export default function SideBar({ children, visible, setVisible }: SideBarProps) {

  return (
    <div className={`${visible || styles.hide} ${styles.sidebar}`}>

      <div className={styles.header}>
        <button className={styles.button} onClick={() => setVisible(!visible)}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
        </button>
      </div>

      <div className={styles.body}>
      {children &&
        Children.map(children, child => (
          <div className={styles.item}>
            {child.props ?
              cloneElement(child, { style: { ...child.props.style } })
              :
              child
            }
          </div>
        ))}
      </div>
    </div>
  );
}
