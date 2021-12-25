import { useState } from 'react';
import { Select } from '../../components/utils/Textfields';
import SingleCourse from './singleCourse';
import Button from '../../components/button/Button';
import Pagination from './Pagination';

const CourseList = () => {
  const [sort, setSort] = useState("");
  const handleChange = (e) => {
    const val = e.target.value;
    setSort(val);
  };
  return (
    <div className="col-span-full lg:col-span-8 order-1 lg:order-2 ">
      <div className="flex justify-center flex-col sm:flex-row sm:justify-between sm:flex-wrap items-center space-y-2 lg:space-y-0">
        <h3 className="font-semibold">
          Showing <span className="text-primary-amber font-bold">9 </span> of <span className="text-primary-900 font-bold">50 </span>
          courses
        </h3>
        <div className="flex space-x-3 items-center">
          <Select id="sort" name="sort" defaultValue="Sort By" choices={["Popularity", "Most Read", "Most View", "Trending"]} className="h-11 w-full" value={sort} onChange={handleChange} />
          <Button className="bg-primary-amber !px-4 !py-3.5 rounded">
            Submit
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-8">
        <SingleCourse />
      </div>
      {/* Pagination */}
      <div className="flex flex-col justify-center items-center mt-10">
        <Pagination />
      </div>
    </div>
  );
}

export default CourseList;