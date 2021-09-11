import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

import logo from "../../../../assets/etiquete-me.png";
import menuClosed from "../../../../assets/menulight.png";
import menuOpened from "../../../../assets/menudark.png";

function Header({ children, ...props }) {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleMenu() {
    // setMenuStatus(!menuStatus);
    console.log(1);
  }

  return (
    <>
      <Head>
        <title>etiquete.me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="etiquete.me" content="Página de mapeamento or QRCode" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="logo etiquete.me"
              layout="intrinsic"
              width={300}
              height={75}
            />
          </div>

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
        </div>

        <div
          className={styles.menu}
          style={!menuStatus ? { display: "none" } : { display: "flex" }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Header;
