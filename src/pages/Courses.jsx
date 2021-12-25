import Layout from "../layout/Layout";
import {Waves2} from "../components/svg/Svg";
import CourseBanner from "../containers/coursesContent/courseContent";

const Courses = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-10 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves2 className="absolute bottom-0 -z-0 opacity-10 " />  
        </section>
        <CourseBanner />
      </>
    </Layout>
  );
};

export default Courses;
