import Layout from "../layout/Layout";
import {Waves4} from "../components/svg/Svg";
import CourseContent from "../containers/coursesContent";

const Courses = () => {
  return (
    <Layout>
      <>
        <section className="relative pb-10 bg-tag-section px-4 lg:px-0  lg:block hidden">
          <Waves4 className="absolute bottom-0 -z-0 opacity-10 " />  
        </section>
        <CourseContent />
      </>
    </Layout>
  );
};

export default Courses;
