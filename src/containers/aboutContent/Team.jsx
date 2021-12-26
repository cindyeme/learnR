import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "@material-tailwind/react/Image";
import Team_data from "../../constants/team.json";

const Team = () => (
  <section className="relative pb-16">
    <div className="max-w-6xl mx-auto z-50 px-4 lg:px-0">
      <div className="max-w-3xl text-center mx-auto">
        <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
          Meet Our Team
        </h5>
        <h2 className="tracking-wide leading-snug lg:leading-normal text-3xl md:text-4xl lg:text-5xl mt-4 mb-5 font-bolder text-primary-900">
          Our Creative Team
        </h2>
      </div>
      <div
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {Team_data.map((item, i) => {
          return (
            <div className="col-span-full sm:col-span-1 relative" key={i}>
              <div className="flex flex-col items-center ">
                <Image
                  src={require(`../../assets/img/${item.img}`)}
                  rounded={false}
                  raised={true}
                  alt={item.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute -bottom-7 shadow-new bg-white rounded-lg py-4 px-7">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <h2 className="text-primary-600 font-bold">{item.name}</h2>
                    <p className="font-semibold text-grayish-900 text-sm">
                      {item.role}
                    </p>

                    {/* Social links */}
                    <ul className="flex pt-4">
                      <li>
                        <a
                          href="https://"
                          className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                          aria-label="Facebook"
                          title="Follow on Facebook"
                        >
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="text-sm"
                          />
                        </a>
                      </li>
                      <li className="ml-3">
                        <a
                          href="https://"
                          className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                          aria-label="Github"
                          title="Follow on Github"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-sm"
                          />
                        </a>
                      </li>
                      <li className="ml-3">
                        <a
                          href="https://"
                          className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                          aria-label="Twitter"
                          title="Follow on Twitter"
                        >
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-sm"
                          />
                        </a>
                      </li>
                      <li className="ml-3">
                        <a
                          href="https://"
                          className=" hover:text-primary-800 hover:border-primary-800 bg-white text-gray-600 hover:bg-white-100 rounded-full shadow-lg-amber hover:shadow-none transition duration-150 ease-linear border border-gray-600 px-3 py-2"
                          aria-label="Instagram"
                          title="Follow on Instagram"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-sm"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Team;
