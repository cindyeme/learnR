import React from "react";
// import "../../styles/global.css";
import { Link } from "react-router-dom";
import AboutFacts from "./aboutFacts";
import AboutIntro from "./aboutIntro";
import AboutStatements from "./aboutStatements";
import "../../styles/svg.css";
import AboutOffer from "./aboutOffer";
import Team from "./Team";

const AboutContent = () => (
  <section className="shape">
    <div className="relative max-w-7xl mx-auto px-4 banner pb-24">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center pt-36 lg:pt-0 lg:-mt-28 xl:-mt-40">
        <div className="flex flex-col space-y-6">
          <h1 className="lg:text-6xl text-4xl font-bolder tracking-wide lg:font-bold leading-snug">
            About LearnR
          </h1>
          <p className="flex items-center space-x-3 justify-center">
            <Link to="/" className="text-primary-900">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </p>
        </div>
      </div>
      <AboutIntro />
      <AboutOffer />
      <AboutStatements />
      <AboutFacts />
      <Team />
    </div>
  </section>
);

export default AboutContent;
