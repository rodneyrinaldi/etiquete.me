import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
        <div style={{ padding: '10px' }}>
          <Image
            src='/etiquete-me.png'
            alt='logo'
            width={'420px'}
            height={'105px'}
          />
        </div>
        {children}
      </div>
    </>
  )
}

export default Header