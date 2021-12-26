import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <footer className="z-0 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="lg:-mt-24 p-6 border-t-8 border-primary-800 bg-white flex flex-col justify-center items-center space-y-">
              {/* Logo */}
              <Logo />
              <p className="text-sm pb-6 leading-relaxed tracking-wide text-gray-600 text-center font-medium">
                LearnR aims to bring together students and teachers on the
                community platform. We take our mission of increasing global
                access to quality education seriously. We connect learners to
                the best tutors and courses from around the world.
              </p>
              {/* Social links */}
              <ul className="flex mb-4 md:mb-0">
                <li>
                  <a
                    href="https://"
                    className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                    title="Follow us on Facebook"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
                  </a>
                </li>
                <li className="ml-3">
                  <a
                    href="https://"
                    className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                    aria-label="Github"
                    title="Follow us on Github"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  </a>
                </li>
                <li className="ml-3">
                  <a
                    href="https://"
                    className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                    aria-label="Twitter"
                    title="Follow us on Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-sm" />
                  </a>
                </li>
                <li className="ml-3">
                  <a
                    href="https://"
                    className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                    aria-label="Instagram"
                    title="Follow us on Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className=" font-bold mb-4 border-l-4 pl-3 border-primary-900">
              Courses
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/courses"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Physics
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/courses"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Mathematics
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/courses"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Literature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/courses"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Chemistry
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/courses"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Biology
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className=" font-bold mb-4 border-l-4 pl-3 border-primary-900">
              Resources
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Tutorials &amp; Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className=" font-bold mb-4 border-l-4 pl-3 border-primary-900">
              Quick Links
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/become-a-teacher"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Become a Teacher
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/pricing"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-policy"
                  className=" hover:text-primary-900 transition duration-150 ease-linear"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className=" font-bold mb-4 border-l-4 pl-3 border-primary-900">
              Subscribe
            </h6>
            <p className="text-sm  mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-800"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-primary-600 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-8 border-t border-gray-200">
          <div className="text-sm md:order-1 mb-2 md:mb-0">
            <Link
              to="#"
              className=" hover:text-primary-900 hover:underline transition duration-150 ease-linear"
            >
              Terms
            </Link>{" "}
            ·{" "}
            <Link
              to="#"
              className=" hover:text-primary-900 hover:underline transition duration-150 ease-linear"
            >
              Privacy Policy
            </Link>
            <p className="pt-2">
              <a href="https://storyset.com/online" className="text-xs ">
                Online illustrations by Storyset
              </a>
            </p>
          </div>

          {/* Copyrights note */}
          <div className="text-sm  mr-4">
            Made by{" "}
            <a
              className="text-primary-amber font-bold hover:underline"
              href="https://"
            >
              MWS28 Team
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
