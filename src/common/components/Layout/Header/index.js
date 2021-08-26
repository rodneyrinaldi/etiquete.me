import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.css'

function Header(props) {
  return (
    <>
      <Head>
        <title>etiquete.me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="etiquete.me" content="Página de mapeamento or QRCode" />
      </Head>
      <div className={styles.container}>
        header
      </div>
    </>
  )
}

export default Header