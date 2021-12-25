import Banner from "../containers/landingPage/Banner";
import Layout from "../layout/Layout";
import '../styles/global.css';
import AboutBrief from "../containers/landingPage/aboutBrief";
import Discover from "../containers/landingPage/Offer";
import Explore from "../containers/landingPage/Explore";
import Teachers from "../containers/landingPage/Teachers";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <AboutBrief />
      <Discover />
      <Explore />
      <Teachers />
    </Layout>
  );
}

export default Home;