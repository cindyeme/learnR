import React, { useState, useEffect, useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import Transition from '../utils/Transition';

function Header() {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // detect whether user has scrolled the page down by 5px
  useEffect(() => {
    const scrollHandler = () =>
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  //
  const ref = useRef(null);
  return (
    <>
      <header
        className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top && "bg-primary-600 shadow-lg"
        }`}
        ref={ref}
      >
        <div className="max-w-full bg-primary-600 lg:bg-transparent mx-auto px-4 lg:px-16 xl:px-20 py-4">
          <div className="flex flex-wrap items-center justify-between">
            <Link
              to="/"
              className="flex items-center uppercase"
              aria-label="LearnR"
            >
              <span className="text-xl font-bold">Learn</span>{" "}
              <span className="text-primary-800 text-2xl font-bolder">R</span>
            </Link>
            {/* Hamburger */}
            <button
              type="button"
              onClick={handleClick}
              className="lg:hidden focus:outline-none"
            >
              {open ? (
                <svg
                  className="w-8 h-8 cursor-pointer bg-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <nav className="lg:flex items-center space-x-32 hidden">
              <ul className="lg:flex lg:space-y-0 lg:flex-grow lg:flex-row lg:flex-wrap lg:space-x-10 lg:items-center ">
                {/* Home */}
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="bg-grayish-active"
                    className=" text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                  >
                    Home
                  </NavLink>
                </li>
                {/* About */}
                <li>
                  <NavLink
                    to="/about-us"
                    activeClassName="bg-grayish-active"
                    className=" text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                  >
                    About Us
                  </NavLink>
                </li>
                {/* Courses */}
                <li>
                  <NavLink
                    to="/courses"
                    activeClassName="bg-grayish-active"
                    className=" text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                  >
                    Courses
                  </NavLink>
                </li>
                {/* Become-a-teacher */}
                <li>
                  <NavLink
                    to="/become-a-teacher"
                    activeClassName="bg-grayish-active"
                    className=" text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                  >
                    Become A Teacher
                  </NavLink>
                </li>
                {/* CTA */}
                <li>
                  <NavLink
                    to="/sign-in"
                    activeClassName=""
                    className="font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-amber-500 hover:bg-amber-700 focus:bg-amber-400 active:bg-amber-800 shadow-md-amber hover:shadow-lg-amber"
                  >
                    Get Started
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div>
        <Transition
          id="modal"
          className="fixed inset-0 z-50  overflow-hidden flex items-center justify-center transform px-2 my-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal"
          show={open}
          enter="transition ease-out duration-200"
          enterStart="opacity-0 scale-95"
          enterEnd="opacity-100 scale-100"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100 scale-100"
          leaveEnd="opacity-0 scale-95"
        >
          <div
            className={`${
              open
                ? "opacity-100 transition-opacity duration-300 ease-in"
                : "hidden"
            } bg-white px-4 pb-5 pt-2 w-full  rounded h-full overflow-y-auto transition-all duration-300 ease-out z-50 lg:hidden`}
          >
            <ul className="flex flex-col space-y-5 divide-y divide-grayish-light">
              {/* Home */}
              <li className="mt-4">
                <NavLink
                  exact
                  to="/"
                  activeClassName="bg-grayish-active"
                  className="text-gray-700 text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                >
                  Home
                </NavLink>
              </li>
              {/* About */}
              <li className="mt-4">
                <NavLink
                  to="/about-us"
                  activeClassName="bg-grayish-active"
                  className="text-gray-700 text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                >
                  About Us
                </NavLink>
              </li>
              {/* Courses */}
              <li className="mt-4">
                <NavLink
                  to="/courses"
                  activeClassName="bg-grayish-active"
                  className="text-gray-700 text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                >
                  Courses
                </NavLink>
              </li>
              {/* Become-a-teacher */}
              <li className="mt-4">
                <NavLink
                  to="/become-a-teacher"
                  activeClassName="bg-grayish-active"
                  className="text-gray-700 text-xs uppercase font-semibold px-3 py-2 hover:text-primary-900 transition-all duration-300 ease-out"
                >
                  Become A Teacher
                </NavLink>
              </li>
              {/* CTA */}
              <li className="mt-4">
                <NavLink
                  to="/sign-in"
                  activeClassName=""
                  className="font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-amber-500 hover:bg-amber-700 focus:bg-amber-400 active:bg-amber-800 shadow-md-amber hover:shadow-lg-amber"
                >
                  Get Started
                </NavLink>
              </li>
            </ul>
          </div>
        </Transition>
        <Transition
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity w-full max-w-full lg:hidden"
          show={open}
          enter="transition ease-out duration-200"
          enterStart="opacity-0"
          enterEnd="opacity-100"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
          aria-hidden="true"
        />
      </div>
    </>
  );
}

export default Header;
