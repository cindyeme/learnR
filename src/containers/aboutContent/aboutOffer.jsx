import icon1 from '../../assets/img/icon-8.png';
import icon2 from '../../assets/img/icon-6.png';
import icon3 from '../../assets/img/icon-7.png';

const AboutOffer = () => (
  <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 mt-12 mb-16 lg:mb-28 relative">
    {/* 1st item */}
    <div
      className="sm:col-span-1 col-span-full"
      data-aos="flip-right"
      data-aos-delay="100"
    >
      <div className=" p-4 rounded-r-lg border border-l-8 border-primary-900 relative">
        <span class="flex absolute -right-3 -top-8 md:-right-4 lg:-top-6">
          {/* <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-grayish-light"></span> */}
          <span class="relative inline-flex rounded-full p-3 md:px-4 md:py-3 bg-gray-100">
            <img
              src={icon1}
              alt="icon"
              className="w-6 h-6 object-contain md:w-8 md:h-8 img-fluid"
            />
          </span>
        </span>
        <div>
          <h2 className="text-base font-bold text-primary-900 mb-2">
            Best Online Education
          </h2>
          <p className="text-xs font-medium">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
    </div>
    {/* 2nd item */}
    <div
      className="sm:col-span-1 col-span-full"
      data-aos="flip-right"
      data-aos-delay="200"
    >
      <div className=" p-4 rounded-r-lg border border-l-8 border-primary-900 relative">
        <span class="flex absolute -right-4 -top-6">
          {/* <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-grayish-light"></span> */}
          <span class="relative inline-flex rounded-full p-3 md:px-4 md:py-3 bg-gray-100 ">
            <img
              src={icon3}
              alt="icon"
              className="w-6 h-6 object-contain md:w-8 md:h-8 img-fluid"
            />
          </span>
        </span>
        <div>
          <h2 className="text-base font-bold text-primary-900 mb-2">
            Unlimited Access to Subjects
          </h2>
          <p className="text-xs font-medium">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
    </div>
    {/* 3rd item */}
    <div
      className="sm:col-span-1 col-span-full"
      data-aos="flip-right"
      data-aos-delay="300"
    >
      <div className=" p-4 rounded-r-lg border border-l-8 border-primary-900 relative">
        <span class="flex absolute -right-4 -top-6">
          {/* <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-grayish-light"></span> */}
          <span class="relative inline-flex rounded-full p-3 md:px-4 md:py-3 bg-gray-100">
            <img
              src={icon2}
              alt="icon"
              className="w-6 h-6 object-contain md:w-8 md:h-8 img-fluid"
            />
          </span>
        </span>
        <div>
          <h2 className="text-base font-bold text-primary-900 mb-2">
            Qualified Teachers
          </h2>
          <p className="text-xs font-medium">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutOffer;