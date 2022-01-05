import Layout from "../components/layout/Layout";
import { Waves5 } from "../components/svg/Svg";
import AboutIndex from "../containers/aboutContent";

const About = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-12 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves5 className=" bottom-0 -z-0 opacity-75 hidden lg:block" />
        </section>
        <AboutIndex />
      </>
    </Layout>
  );
};

export default About;
