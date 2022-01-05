import BackToTop from "../backToTop/scrollButton";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <BackToTop />
    <Footer />
  </>
);

export default Layout;
