import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Banner from "./Banner";
import Footer from "./Footer";

function Layout({ children, ...props }) {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      {props.default !== "yes" ? (
        <Main>{children}</Main>
      ) : (
        <Main>{children}</Main>
      )}
      <Footer />
    </>
  );
}

export default Layout;
