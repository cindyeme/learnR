import Layout from "../layout/Layout";
import { Waves5 } from "../components/svg/Svg";
import AboutContent from "../containers/aboutContent";

const About = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-10 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves5 className="absolute bottom-0 -z-0 opacity-10 " />
        </section>
        <AboutContent />
      </>
    </Layout>
  );
};

export default About;
