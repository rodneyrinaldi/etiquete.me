import Image from "next/image";

import styles from "./index.module.css";

import logo from "../../../../assets/tag.png";

function Section({ children, bgcolor }) {
  return (
    <>
      <div className={styles.container} style={{ background: bgcolor }}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo etiquete.me"
            layout="intrinsic"
            width={60}
            height={60}
          />
        </div>
        {children}
      </div>
    </>
  );
}

export default Section;
