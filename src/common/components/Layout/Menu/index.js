import Link from 'next/link'

import styles from './index.module.css'

function Menu(props) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/home"><a>INÍCIO</a></Link>
        <Link href="/queries"><a>CONSULTAS</a></Link>
        <Link href="/protected/tags"><a>REGISTRO</a></Link>
        <Link href="/protected/profile"><a>SUA CONTA</a></Link>
      </div>
    </>
  )
}

export default Menu