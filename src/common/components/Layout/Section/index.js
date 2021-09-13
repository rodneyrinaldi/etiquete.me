import styles from "./index.module.css";

function Section({ children, bgcolor }) {
  return (
    <>
      <div className={styles.container} style={{ background: bgcolor }}>
        {children}
      </div>
    </>
  );
}

export default Section;
