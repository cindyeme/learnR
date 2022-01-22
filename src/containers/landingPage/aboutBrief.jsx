import { Link } from "react-router-dom";
import aboutImg from "../../assets/img/course-appp.svg";
import Button from "../../components/button/Button";

const AboutBrief = () => (
  <section
    className="relative max-w-7xl lg:container mx-auto mt-4 xl:mt-0"
  >
    <div className="grid lg:grid-cols-12 gap-x-6">
      <div className="col-span-full lg:col-span-6" data-aos="fade-right">
        <div className="img-box relative my-5 xl:my-0">
          <img src={aboutImg} alt="about-img" className="img-fluid z-50" />
        </div>
      </div>
      <div className="col-span-full lg:col-span-6" data-aos="fade-left">
        <div className="about-brief px-4 flex flex-col justify-center items-center lg:justify-start lg:items-start mt-6">
          <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
            About us
          </h5>
          <h2 className="tracking-wide lg:leading-normal text-3xl my-5 md:text-4xl lg:text-5xl font-bolder text-primary-900 text-center lg:text-left">
            129+ Courses Online from Best Teachers
          </h2>
          <p className="leading-relaxed text-center lg:text-left text-sm md:text-base">
            LearnR aims to bring together students and teachers on the community
            platform. We take our mission of increasing global access to quality
            education seriously. We illuminate academic textbooks with annotations and discussion around content. LearnR mission is to facilitate the easy spread of knowledge within our community/schools. Our goal is to promote open-source academic textbooks and publishing for teachers and learners alike.
          </p>
          <hr className="text-primary-amber w-20 py-4 mt-5" />
          <ul className="list-disc lg:list-inside px-4 lg:px-0 flex flex-col space-y-3 text-sm md:text-base">
            <li>Professional and Experienced</li>
            <li>
              We Connect Learners To The Best Teachers From Around The World
            </li>
            <li>
              Our Mission Is Increasing Global Access To Quality Education
            </li>
            <li>129k Online Available Textbooks</li>
          </ul>
          <div className="mt-10 flex flex-col space-y-5 xs:flex-row xs:space-x-6 xs:space-y-0 items-center">
            <Button className="rounded-full ring ring-primary-900 ring-offset-2 !bg-primary-amber !px-5 !py-4">
              <Link to="/signin">Get Started</Link>{" "}
            </Button>
            <Button className="rounded-full ring ring-primary-900 ring-offset-2 !bg-transparent !px-5 !py-4">
              <Link to="/about-us">Read More</Link>{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutBrief;
