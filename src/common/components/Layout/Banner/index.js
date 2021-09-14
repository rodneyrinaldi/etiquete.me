import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./index.module.css";

import carousel1w from "../../../../assets/carousel1w.png";
import carousel1m from "../../../../assets/carousel1m.png";

function Banner() {
  const { height } = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <Image
          id="carouselitem1"
          src={height <= 640 ? carousel1m : carousel1w}
          alt=""
          width={height <= 640 ? 600 : 1600}
          height={height <= 640 ? 400 : 400}
        />
      </div>
    </>
  );
}

export default Banner;

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
