import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { Steps } from "../../components/svg/Svg";

const BecomeIntro = () => (
  <div className="mt-12 lg:max-w-5xl mx-auto text-center relative" data-aos="fade-up">
    <div className="flex flex-col space-y-4">
      <h2 className="tracking-wide lg:leading-normal text-3xl mt-5 md:text-3xl lg:text-4xl font-bolder text-primary-900 capitalize">
        Transform your life through online education with LearnR
      </h2>
      <p className="leading-relaxed text-sm md:text-base font-medium">
        We take our mission of increasing global access to quality education
        seriously. We connect learners to the best tutors and courses from
        around the world. The quick, brown fox jumps over a lazy dog. DJs flock
        by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
        flick quartz, vex nymphs. Waltz, bad
      </p>
      <div className="pt-6 ">
        <Button className="rounded-full ring ring-primary-900 ring-offset-2 !bg-primary-amber !px-5 !py-3">
          <Link to="/teachers-form">Click here to signup</Link>{" "}
        </Button>
      </div>
    </div>
    <Steps className="absolute" />
  </div>
);

export default BecomeIntro;