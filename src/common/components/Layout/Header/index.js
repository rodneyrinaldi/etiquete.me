import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./index.module.css";

import logo from "../../../../assets/etiquete-me.png";
import menuClosed from "../../../../assets/menulight.png";
import menuOpened from "../../../../assets/menudark.png";

function Header({ ...props }) {
  const [menuStatus, setMenuStatus] = useState(false);
  const { height } = useWindowSize();

  return (
    <>
      <Head>
        <title>etiquete.me</title>
        <meta property="og:title" content="etiquete.me serviços" />
        <meta
          property="og:description"
          content="Página de mapeamento or QRCode"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etiquete.me/" />
        <meta property="og:image" content="https://etiquete.me/ogimage.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="620" />
        <meta property="og:image:height" content="320" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              {/* <Image
                id="menubutton"
                src={!menuStatus ? menuClosed : menuOpened}
                alt="menu fechado"
                layout="intrinsic"
                width={30}
                height={30}
              /> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
