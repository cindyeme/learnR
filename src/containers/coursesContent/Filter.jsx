import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "@material-tailwind/react/Checkbox";

const Filter = () => {
  return (
    <div className="col-span-full lg:col-span-4 order-2 lg:order-1 mb-8">
      <h2 className="text-2xl font-bold pb-3 border-b mb-7 filter-title relative">
        <span className="text-primary-900">Find </span> Your Course
      </h2>
      {/* Search */}
      <form action="#" className="relative">
        <button
          type="submit"
          className="absolute bottom-2.5 right-2 z-40 text-xl lg:text-primary-800 focus:outline-none lg:hover:bg-primary-amber bg-primary-amber lg:bg-transparent rounded hover:text-white py-1 px-3 transition duration-300 ease-linear"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          className="form-input w-full h-14 rounded-md pr-14 relative text-gray-900 pl-4"
          placeholder="Search here"
        />
      </form>
      {/* Level */}
      <div className="filter-level mt-10">
        <h2 className="text-2xl font-bold pb-3 border-b mb-7 filter-title relative">
          Level
        </h2>
        <ul className="flex flex-col space-y-2 divide-y divide-grayish-light">
          <li>
            <Checkbox color="amber" text="Pre-school" id="level-pre" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Primary" id="level-pri" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Junior Secondary" id="level-jr" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Senior Secondary" id="level-sr" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Teriary" id="level-tr" />
          </li>
        </ul>
      </div>
      {/* Price */}
      <div className="filter-price mt-10">
        <h2 className="text-2xl font-bold pb-3 border-b mb-7 filter-title relative">
          Price
        </h2>
        <ul className="flex flex-col space-y-2 divide-y divide-grayish-light">
          <li>
            <Checkbox color="amber" text="Free Courses" id="p-free" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Paid Courses" id="p-paid" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Only Subscription" id="p-sub" />
          </li>
        </ul>
      </div>
      {/* Areas */}
      <div className="filter-area mt-10">
        <h2 className="text-2xl font-bold pb-3 border-b mb-7 filter-title relative">
          Areas
        </h2>
        <ul className="flex flex-col space-y-2 divide-y divide-grayish-light">
          <li>
            <Checkbox color="amber" text="Art" id="art" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Science" id="sci" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="General Studies" id="gst" />
          </li>
          <li className="pt-2">
            <Checkbox color="amber" text="Computing" id="csc" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
