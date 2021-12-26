import Layout from "../layout/Layout";
import { Waves3 } from "../components/svg/Svg";
import BecomeIndex from "../containers/bctContent";

const BecomeATeacher = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-12 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves3 className="absolute bottom-0 -z-0 opacity-10 " />
        </section>
        <BecomeIndex />
      </>
    </Layout>
  );
};

export default BecomeATeacher;
