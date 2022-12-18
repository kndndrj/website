import Image from "next/image";
import styles from "./card.module.css";
import utilStyles from "../styles/utils.module.css";
import A from "./a";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageButton } from "./navbar"

const buttons: PageButton[] = [
  { icon: ["fas", "graduation-cap"], label: "Diplomirani inženir strojništva (VS)", href: "https://repozitorij.uni-lj.si/IzpisGradiva.php?id=109420&lang=slv", blank: true },
  { icon: ["fas", "graduation-cap"], label: "Študent 2. st. mehatronike UL FE", href: "/", blank: false },
  { icon: ["fas", "envelope"], label: "Kontakt", href: "mailto:andrej@kenda.one", blank: false },
];

export default function Card({ name }) {
  return (
    <div className={styles.card} >
      <div className={`${utilStyles.sideImg} ${utilStyles.leftImg}`}>
        <Image
          className={styles.image}
          src="/images/profile.jpg"
          height={350}
          width={350}
          alt={name}
        />
      </div>

      <h1 className={utilStyles.headingTitle}>{name}</h1>

      <ul className={utilStyles.list}>
        {buttons.map((button) => (
          <li key={button.label}>
            <A href={button.href} blank={button.blank} ><FontAwesomeIcon icon={button.icon} />{button.label}</A>
          </li>
        ))}
      </ul>
    </div>
  );
}
