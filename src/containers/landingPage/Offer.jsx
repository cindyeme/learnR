import { Link } from 'react-router-dom';
import icon1 from '../../assets/img/icon-1.png';
import icon2 from '../../assets/img/icon-2.png';
import icon3 from '../../assets/img/icon-3.png';
import icon4 from '../../assets/img/icon-4.png';

const Discover = () => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto">
      <div className="offer_content">
        <div className="text-center max-w-3xl mx-auto">
          <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
            Education for everyone
          </h5>
          <h2 className="tracking-wide leading-normal my-3 text-4xl font-bolder text-primary-900">
            Discover How LearnR Works
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-5 max-h-full py-4 mt-8">
          {/* 1st  */}
          <div className="col-span-full md:col-span-1 flex flex-col space-y-4 bg-primary-600 p-4 justify-center items-center border border-primary-fade rounded">
            <div className="icon-box">
              <img src={icon1} alt="icon" className="img-fluid" />
            </div>
            <h3 className="font-bold tracking-wide text-primary-900 text-center">Create An Account</h3>
            <p className="text-grayish-600 text-sm text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Link to="/sign-in" className="text-primary-amber font-medium hover:underline">Start Now!</Link>
          </div>
          {/* 2nd  */}
          <div className="col-span-full md:col-span-1 flex flex-col space-y-4 bg-primary-600 p-4 justify-center items-center border border-primary-fade rounded">
            <div className="icon-box">
              <img src={icon2} alt="icon" className="img-fluid" />
            </div>
            <h3 className="font-bold tracking-wide text-primary-900 text-center">Browse Course Syllabus</h3>
            <p className="text-grayish-600 text-sm text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Link to="/sign-in" className="text-primary-amber font-medium hover:underline">Start Now!</Link>
          </div>
          {/* 3rd  */}
          <div className="col-span-full md:col-span-1 flex flex-col space-y-4 bg-primary-600 p-4 justify-center items-center border border-primary-fade rounded">
            <div className="icon-box">
              <img src={icon3} alt="icon" className="img-fluid" />
            </div>
            <h3 className="font-bold tracking-wide text-primary-900 text-center">Learn at Your Own Pace</h3>
            <p className="text-grayish-600 text-sm text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Link to="/sign-in" className="text-primary-amber font-medium hover:underline">Start Now!</Link>
          </div>
          {/* 4th  */}
          <div className="col-span-full md:col-span-1 flex flex-col space-y-4 bg-primary-600 p-4 justify-center items-center border border-primary-fade rounded">
            <div className="icon-box">
              <img src={icon4} alt="icon" className="img-fluid" />
            </div>
            <h3 className="font-bold tracking-wide text-primary-900 text-center">Interact with Industry Experts</h3>
            <p className="text-grayish-600 text-sm text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Link to="/sign-in" className="text-primary-amber font-medium hover:underline">Start Now!</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Discover;