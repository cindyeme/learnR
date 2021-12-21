import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import teacher from "../../assets/img/teacher.png";
import Explore_data from "../../constants/explore.json";
import { Waves } from "../../components/svg/svg";
import Button from "../../components/Button/Button";

const Explore = () => (
  <section className="relative pb-10">
    <Waves className="absolute bottom-0 -z-0 opacity-10" />
    <div className="max-w-6xl mx-auto z-50">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="tracking-wide leading-snug text-5xl mb-5 font-bolder text-primary-900">
          Explore Our Popular Lesson Notes
        </h2>
      </div>
      <div className="explore-content">
        <div className="grid lg:grid-cols-4 gap-x-5 gap-y-4">
          {Explore_data.map((item, i) => {
            return (
              <div
                className="col-span-full lg:col-span-1 border rounded border-grayish-600 bg-primary-600 p-4 bg-grayish-ligh my-5 flex flex-col space-y-4 hover:shadow-lg transition duration-300 ease-linear"
                key={i}
              >
                <div className="flex space-x-4 items-center">
                  <img
                    src={teacher}
                    alt="teacher"
                    className="img-fluid rounded-full h-8 w-8 object-cover shadow"
                  />
                  <h5 className="text-sm font-bold tracking-wide">
                    {item.name}
                  </h5>
                </div>
                <p className="font-bold text-primary-amber text-center">
                  {item.topic}
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <p className="flex space-x-2 items-center">
                    <FontAwesomeIcon icon={faBookOpen} size="xs" />
                    <span className="text-sm">{item.pages} Pages</span>
                  </p>
                  <p className="flex space-x-2 items-center">
                    <FontAwesomeIcon icon={faFolderOpen} size="xs" />
                    <span className="text-sm">{item.lectures} Lectures</span>
                  </p>
                </div>
                <div className="book-cover relative ">
                  <img
                    src={require(`../../assets/img/${item.cover}`)}
                    alt="book"
                    className="img-fluid w-full mt-3 rounded-lg object-cover h-32 opacity-70"
                  />
                  <p
                    className={`${item.color} text-white bg-tag-blue absolute text-xs px-3 py-1  top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl`}
                  >
                    {item.subject}
                  </p>
                </div>
                <p className="text-sm text-center">For Junior Secondary</p>
              </div>
            );
          })}
        </div>
        <div className="max-w-xl mx-auto text-center mt-4">
          <Button className="rounded-full text-center">
            View All
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Explore;