import styles from "./sidebar.module.css";
import { Dispatch, SetStateAction, Children, cloneElement } from "react";
import MenuToggle from "./menu_toggle"

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
          <MenuToggle />
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
