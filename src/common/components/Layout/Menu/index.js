import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

import menuClosed from "../../../../assets/menulight.png";
import menuOpened from "../../../../assets/menudark.png";

function Menu({ ...props }) {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <div className={styles.menuicon}>
        <a onClick={() => setMenuStatus(!menuStatus)}>
          <Image
            id="menubutton"
            src={!menuStatus ? menuClosed : menuOpened}
            alt="menu fechado"
            layout="intrinsic"
            width={30}
            height={30}
          />
        </a>
      </div>

      <div
        className={styles.container}
        style={
          menuStatus
            ? {
                display: "flex",
              }
            : {}
        }
      >
        <Link href="/home">
          <a>INÍCIO</a>
        </Link>
        <Link href="/queries">
          <a>CONSULTAS</a>
        </Link>
        <Link href="/protected/tags">
          <a>REGISTRO</a>
        </Link>
        <Link href="/protected/profile">
          <a>SUA CONTA</a>
        </Link>
      </div>
    </>
  );
}

export default Menu;
