import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Explore_data from "../../constants/explore.json";
import teacher from '../../assets/img/teacher.jpg';

const SingleCourse = () => {
  return (
    <>
      {Explore_data.map((item, i) => {
        return (
          <div
            className="col-span-full sm:col-span-1 border rounded border-grayish-600 bg-primary-600 pb-3 bg-grayish-ligh flex flex-col space-y-3 hover:shadow-lg transition duration-300 ease-linear group"
            key={i}
          >
            <div className="book-cover relative overflow-hidden">
              <Link to="/course-details">
                <img
                  src={require(`../../assets/img/${item.cover}`)}
                  alt="book"
                  className="img-fluid w-full rounded-t h-40 object-cover scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 relative"
                />
              </Link>
              <div className={`${item.tagColor} trend-badge text-center bg-tag-blue flex flex-col`}>
                {/* <FontAwesomeIcon icon={faBolt} /> */}
                <i className="fas fa-bolt" />
                <span className={`px-3 text-xs`}>
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="flex space-x-3 items-center px-3">
              <img
                src={teacher}
                alt="teacher"
                className="img-fluid rounded-full h-8 w-8 object-cover shadow-lg-amber"
              />
              <h5 className="text-xs font-semibold tracking-wide">
                {item.name}
              </h5>
            </div>
            <p className="font-bold text-primary-ambe text-center lg:text-left text-sm px-3 group-hover:text-primary-amber transition duration-300 ease-linear">
              <Link to="/course-details">{item.topic}</Link>
            </p>
            <p className="text-sm text-center font-medium lg:text-left px-3 flex justify-center lg:justify-start items-center space-x-2">
              <span className="text-primary-900 font-bold">Grade:</span>
              <span>{item.grade}</span>
            </p>
            <div className="c-footer border-t border-primary-fade font-medium pt-3 flex justify-between items-center">
              <p className="flex space-x-2 items-center text-xs pl-3">
                <FontAwesomeIcon icon={faBookOpen} size="xs" />
                <span className="text-xs">{item.pages} Pages</span>
              </p>
              <p className="mr-3 text-xs bg-tag-deem px-3 py-1 rounded font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SingleCourse;