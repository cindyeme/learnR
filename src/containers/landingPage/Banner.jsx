import { Link } from "react-router-dom";
import "./banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import bannerImg from "../../assets/img/banner-img.svg";
import Button from "../../components/button/Button";

const Banner = () => (
  <section className="relative">
    {/* <div class="triangle overflow-hidden w-full" /> */}
    {/* <div class="angle" /> */}
    <div class="spikes hidden xl:block"></div>
    <div className="relative container mx-auto px-4 banner pt-40 sm:pt-48 xl:-mt-550">
      <div className="lg:grid gap-x-4 lg:grid-cols-12">
        <div className="wlc-text col-span-full lg:col-span-7">
          <h1 className="lg:text-6xl text-4xl font-bolder tracking-wide lg:font-bold text-white leading-snug banner_caption">
            A Better Learning Future Starts Here
          </h1>
          <p className="text-sm font-medium text-white mt-2 tracking-wide leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="form-search mt-8">
            <form action="#" className="flex flex-row relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute inset-x-0 bottom-4 left-3 md:left-4 z-40 text-xl text-primary-800"
              />
              <input
                type="search"
                name="search"
                id="search"
                className="form-input w-full h-15 rounded-l-md pl-10 md:pl-14 relative text-gray-900"
                placeholder="What do you want to learn?"
              />
              <Button className="rounded-r-md bg-primary-amber">Search</Button>
            </form>
          </div>
          <ul className="mt-8 flex  space-x-4 text-white font-medium">
            <li className="font-bold">Popular:</li>
            <li>
              <ul className="flex flex-wrap space-x-1 sm:space-x-4">
                <li>
                  <Link
                    to="/physics"
                    className="no-underline hover:text-primary-800 transition-all duration-300 ease-linear hover:underline text-sm"
                  >
                    &bull; Physics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/physics"
                    className="no-underline hover:text-primary-800 transition-all duration-300 ease-linear hover:underline text-sm"
                  >
                    &bull; Mathematics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/physics"
                    className="no-underline hover:text-primary-800 transition-all duration-300 ease-linear hover:underline text-sm"
                  >
                    &bull; Biology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/physics"
                    className="no-underline hover:text-primary-800 transition-all duration-300 ease-linear hover:underline text-sm"
                  >
                    &bull; Chemistry
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="wlc-img lg:col-span-5 lg:block hidden col-span-full">
          <img
            src={bannerImg}
            alt="banner-img"
            className="img-fluid animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Banner;
