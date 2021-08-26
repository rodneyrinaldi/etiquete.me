import Link from 'next/link'

import styles from './index.module.css'

function Menu(props) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/home"><a>inicio</a></Link>
        <Link href="/queries"><a>consultas</a></Link>
        <Link href="/protected/tags"><a>cadastro</a></Link>
        <Link href="/protected/profile"><a>perfil</a></Link>
      </div>
    </>
  )
}

export default Menu