import { Link } from "react-router-dom";
import "../../styles/svg.css";
import Goals from "./Goal";
import BecomeIntro from "./Intro";
import Steps from "./Steps";
import Start from "./Start";
import Teachers from "../landingPage/Teachers";
import wave from "../../assets/img/wave.png";

const BecomeIndex = () => (
  <section className="relative shape">
    <div className="relative max-w-7xl mx-auto px-4 banner">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center pt-36 lg:pt-0 lg:-mt-28 xl:-mt-40">
        <div className="flex flex-col space-y-6">
          <h1 className="lg:text-6xl text-4xl font-bolder tracking-wide lg:font-bold leading-snug">
            Become A LearnR Teacher
          </h1>
          <p className="flex items-center space-x-3 justify-center">
            <Link to="/" className="text-primary-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-400">Become-A-Teacher</span>
          </p>
        </div>
      </div>
      <BecomeIntro />
      <Steps />
      <Goals />
      <div className="mt-6">
        <Teachers title="Meet Our Professional Teachers" />
      </div>
      <Start />
    </div>
    <img src={wave} alt="bg-img" className="absolute top-16 lg:hidden" />
  </section>
);

export default BecomeIndex;
