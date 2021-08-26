import styles from './index.module.css'

function Section({ children }) {
  return (<>
    <div className={styles.container}>
      {children}
    </div>
  </>)
}

export default Section