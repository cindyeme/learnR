import BackToTop from "../components/backToTop/scrollButton";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <BackToTop />
    <Footer />
  </>
);

export default Layout;
