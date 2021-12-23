import BackToTop from '../components/BackToTop/scrollButton';
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Head";

const Layout = ({children}) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <BackToTop />
    <Footer />
  </>
)

export default Layout;