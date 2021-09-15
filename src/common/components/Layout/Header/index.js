import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./index.module.css";

import logo from "../../../../assets/etiquete-me.png";
import menuClosed from "../../../../assets/menulight.png";
import menuOpened from "../../../../assets/menudark.png";

function Header({ children, ...props }) {
  const [menuStatus, setMenuStatus] = useState(false);
  const { height } = useWindowSize();

  return (
    <>
      <Head>
        <title>etiquete.me</title>
      </Head>
      <div
        className={styles.container}
        style={
          menuStatus
            ? {
                position: "fixed",
                zIndex: "100",
                width: "100vw",
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
          style={
            !menuStatus && height <= 640
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          {children}
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
