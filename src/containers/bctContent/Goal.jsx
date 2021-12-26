import icon1 from '../../assets/img/icon-12.png';
import icon2 from '../../assets/img/icon-11.png';
import icon3 from '../../assets/img/icon-10.png';
import path3 from "../../assets/img/path4.png";

const Goals = () => (
  <section className="relative">
    <img
      src={path3}
      alt="blob"
      className="img-fluid absolute opacity-10 w-64 h-64 -z-0 -bottom-36 -right-36 hidden xl:block"
    />
    <div
      className="mb-12 lg:max-w-5xl mx-auto text-center relative"
      data-aos="fade-up"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="tracking-wide lg:leading-normal text-3xl mt-5 md:text-3xl lg:text-4xl font-bolder text-gray-300">
          Our Goal is to make Online Education Work for Everyone
        </h2>
        <p className="leading-relaxed text-sm md:text-base font-medium text-gray-400">
          We take our mission of increasing global access to quality education
          seriously. We connect learners to the best tutors and courses from
          around the world. The quick, brown fox jumps over a lazy dog. DJs
          flock by when MTV ax quiz prog.
        </p>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
      {/* Single Item */}
      <div
        className="sm:col-span-1 col-span-full xs:grid xs:grid-cols-5 bg-gray-100 rounded bg-opacity-25 border border-gray-100 py-3 md:py-4 px-3 gap-x-4 flex flex-col space-y-3 xs:space-y-0 items-center justify-center text-center xs:text-left"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="xs:col-span-1 col-span-full">
          <img
            src={icon1}
            alt="icon"
            className="img-fluid bg-gray-200 rounded-lg xs:p-1"
          />
        </div>
        <div className="xs:col-span-4">
          <h2 className="text-lg text-blue-300 font-bold capitalize tracking-wide mb-2">
            Trusted Content
          </h2>
          <p className="font-medium text-sm leading-relaxed">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
      {/* Single Item */}
      <div className="sm:col-span-1 col-span-full xs:grid xs:grid-cols-5 bg-gray-100 rounded bg-opacity-25 border border-gray-100 py-3 md:py-4 px-3 gap-x-4 flex flex-col space-y-3 xs:space-y-0 items-center justify-center text-center xs:text-left">
        <div
          className="xs:col-span-1 col-span-full"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={icon2}
            alt="icon"
            className="img-fluid bg-gray-200 rounded-lg xs:p-1"
          />
        </div>
        <div className="xs:col-span-4">
          <h2 className="text-lg text-blue-300 font-bold capitalize tracking-wide mb-2">
            Certified Teachers
          </h2>
          <p className="font-medium text-sm leading-relaxed">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
      {/* Single Item */}
      <div className="sm:col-span-1 col-span-full xs:grid xs:grid-cols-5 bg-gray-100 rounded bg-opacity-25 border border-gray-100 py-3 md:py-4 px-3 gap-x-4 flex flex-col space-y-3 xs:space-y-0 items-center justify-center text-center xs:text-left">
        <div className="xs:col-span-1 col-span-full">
          <img
            src={icon3}
            alt="icon"
            className="img-fluid bg-gray-200 rounded-lg xs:p-1"
          />
        </div>
        <div className="xs:col-span-4">
          <h2 className="text-lg text-blue-300 font-bold capitalize tracking-wide mb-2">
            Lifetime Access
          </h2>
          <p className="font-medium text-sm leading-relaxed">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Goals;
