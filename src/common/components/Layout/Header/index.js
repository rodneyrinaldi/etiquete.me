import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.css'

function Header({ children, ...props }) {
  return (
    <>
      <Head>
        <title>etiquete.me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="etiquete.me" content="Página de mapeamento or QRCode" />
      </Head>
      <div className={styles.container}>
        header
        {children}
      </div>
    </>
  )
}

export default Header