import Layout from "../components/layout/Layout";
import { Waves3 } from "../components/svg/Svg";
import TeacherIndex from "../containers/tchContent";

const TeacherDetails = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-12 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves3 className="absolute bottom-0 -z-0 opacity-10 " />
        </section>
        <TeacherIndex />
      </>
    </Layout>
  );
};

export default TeacherDetails;
