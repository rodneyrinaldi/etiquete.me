import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'

import * as styles from './index.module.css'

function Layout({ children, ...props }) {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      {
        props.default !== 'yes'
          ? <Main>{children}</Main>
          : <Main>{children}</Main>
      }
      <Footer />
    </>
  )
}

export default Layout