import map from '../../assets/img/world-map.png';
import lrners from '../../assets/img/icon-6-sm.png';
import cors from '../../assets/img/icon-13.png';
import sucs from '../../assets/img/icon-14.png';

const AboutFacts = () => (
  <div
    className="relative mt-20 pb-24"
    style={{ background: `url(${map})`, backgroundSize: "cover" }}
  >
    <div className="lg:grid gap-y-6 gap-x-12 lg:grid-cols-12">
      <div className="col-span-full lg:col-span-8 pb-8" data-aos="fade-down">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start mt-6">
          <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
            Funfacts
          </h5>
          <h2 className="tracking-wide lg:leading-normal text-3xl my-4 md:text-3xl lg:text-4xl font-bolder text-primary-900 text-center lg:text-left">
            Strengths in Numbers
          </h2>
          <p className="leading-relaxed text-center lg:text-left text-sm md:text-base font-medium">
            LearnR aims to bring together students and teachers on the community
            platform. We take our mission of increasing global access to quality
            education seriously. We connect learners to the best tutors and
            courses from around the world.
          </p>
          <div className="mt-10 ">
            <div className="bg-tag-blue bg-opacity-70 py-3 px-5 flex items-center space-x-3 rounded ring-2 ring-grayish-600 ring-offset-2 ring-offset-primary-amber">
              <h1 className="lg:text-2xl text-xl">30+</h1>
              <p className="font-semibold">Succesful students</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-4" data-aos="fade-up">
        <div className=" flex-col space-y-6 items-center">
          {/* 1st Item */}
          <div className="bg-tag-blue bg-opacity-60 py-2.5 px-4 flex items-center space-x-5 rounded ring-2 ring-grayish-600 ring-offset-2 ring-offset-primary-amber">
            <div className="bg-white px-4 py-3 rounded">
              <img src={lrners} alt="icon" className="img-fluid" />
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl">60+</h1>
              <p className="font-semibold text-sm lg:text-base">
                Learners &amp; Counting
              </p>
            </div>
          </div>
          {/* 2nd Item */}
          <div className="bg-tag-blue bg-opacity-60 py-2.5 px-4 flex items-center space-x-5 rounded ring-2 ring-grayish-600 ring-offset-2 ring-offset-primary-amber">
            <div className="bg-white px-4 py-3 rounded">
              <img src={cors} alt="icon" className="img-fluid" />
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl">129+</h1>
              <p className="font-semibold text-sm lg:text-base">
                Total Courses
              </p>
            </div>
          </div>
          {/* 3rd Item */}
          <div className="bg-tag-blue bg-opacity-60 py-2.5 px-4 flex items-center space-x-5 rounded ring-2 ring-grayish-600 ring-offset-2 ring-offset-primary-amber">
            <div className="bg-white px-4 py-3 rounded">
              <img src={sucs} alt="icon" className="img-fluid" />
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl">30+</h1>
              <p className="font-semibold text-sm lg:text-base">
                Successful Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutFacts;
