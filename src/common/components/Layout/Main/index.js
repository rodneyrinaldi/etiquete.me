import styles from './index.module.css'

function Main({ children }) {
  return (<>
    <div className={styles.container}>
      {children}
    </div>
  </>)
}

export default Main