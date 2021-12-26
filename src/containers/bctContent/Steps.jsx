import icon1 from '../../assets/img/icon-1.png';
import icon2 from '../../assets/img/icon-2.png';
import icon3 from '../../assets/img/icon-3.png';

const Steps = () => (
  <div className="my-16">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
      {/* Single item */}
      <div
        className="col-span-full sm:col-span-1"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="icon-box">
            <img src={icon3} alt="icon" className="img-fluid" />
          </div>
          <h2 className="md:text-xl text-lg text-primary-900 font-bolder capitalize tracking-wide">
            Pick Your Interest Area
          </h2>
          <p className="font-medium text-center">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
      {/* Single item */}
      <div
        className="col-span-full sm:col-span-1"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="icon-box">
            <img src={icon2} alt="icon" className="img-fluid" />
          </div>
          <h2 className="md:text-xl text-lg text-primary-900 font-bolder capitalize tracking-wide">
            Prepare Your Syllabus
          </h2>
          <p className="font-medium text-center">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
      {/* Single item */}
      <div
        className="col-span-full sm:col-span-1"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="icon-box">
            <img src={icon1} alt="icon" className="img-fluid" />
          </div>
          <h2 className="md:text-xl text-lg text-primary-900 font-bolder capitalize tracking-wide">
            Build Your Community
          </h2>
          <p className="font-medium text-center">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Steps;