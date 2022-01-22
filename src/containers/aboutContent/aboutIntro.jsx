import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import students from '../../assets/img/abt.png';

const AboutIntro = () => (
  <div className="lg:grid gap-8 lg:grid-cols-12 mt-28">
    <div className="col-span-full lg:col-span-5 mb-8" data-aos="fade-up">
      <img src={students} alt="about-img" className="img-fluid w-full" />
    </div>
    <div className="col-span-full lg:col-span-7" data-aos="fade-down">
      <div className="about-brief flex flex-col justify-center items-center lg:justify-start lg:items-start mt-6">
        <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
          About us
        </h5>
        <h2 className="tracking-wide lg:leading-normal text-3xl my-5 md:text-3xl lg:text-4xl font-bolder text-primary-900 text-center lg:text-left">
          Education in continuing a proud tradition.
        </h2>
        <p className="leading-relaxed font-medium text-center lg:text-left text-sm md:text-base">
          LearnR aims to bring together students and teachers on the community
          platform. We take our mission of increasing global access to quality
          education seriously. We illuminate academic textbooks with annotations
          and discussion around content. LearnR mission is to facilitate the
          easy spread of knowledge within our community/schools. Our goal is to
          promote open-source academic textbooks and publishing for teachers and
          learners alike.
        </p>
        <hr className="text-primary-amber w-20 py-4 mt-5" />
        <ul className="list-disc lg:list-inside px-4 lg:px-0 flex flex-col space-y-3 text-sm md:text-base font-medium">
          <li>Professional and Experienced</li>
          <li>
            We Connect Learners To The Best Teachers From Around The World
          </li>
          <li>Our Mission Is Increasing Global Access To Quality Education</li>
          <li>129k Online Available Textbooks</li>
        </ul>
        <div className="mt-10">
          <Button className="rounded-full ring ring-primary-900 ring-offset-2 !bg-primary-amber !px-5 !py-4">
            <Link to="/signin">Get Started</Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutIntro;