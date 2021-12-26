import React from "react";
import '../../styles/global.css';
import { Link } from "react-router-dom";
import Filter from "./Filter";
import CourseList from "./List";

const CourseContent = () => (
  <section>
    <div className="relative max-w-7xl mx-auto px-4 banner">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center pt-36 lg:pt-0 lg:-mt-28 xl:-mt-40">
        <div className="flex flex-col space-y-6">
          <h1 className="lg:text-6xl text-4xl font-bolder tracking-wide lg:font-bold leading-snug">
            LearnR Courses
          </h1>
          <p className="flex items-center space-x-3 justify-center">
            <Link to="/" className="text-primary-900">
              Home
            </Link>
            <span>/</span>
            <span>Courses</span>
          </p>
        </div>
      </div>
      <div className="lg:grid gap-8 lg:grid-cols-12 lg:my-32 my-28">
        <Filter />
        <CourseList />
      </div>
    </div>
  </section>
);

export default CourseContent;