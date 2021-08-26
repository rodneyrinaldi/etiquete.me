import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import * as styles from './index.module.css'

function Layout({ children, ...pageProps }) {
  return (
    <>
      <Header />
      {
        pageProps.default !== 'yes'
          ? <Main>{children}</Main>
          : <Main>{children}</Main>
      }
      <Footer />
    </>
  )
}

export default Layout