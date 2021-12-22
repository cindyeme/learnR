import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import Image from "@material-tailwind/react/Image";
import Teachers_data from '../../constants/teachers.json';
import { settings } from "../../constants/slider";
import { TeachersSlider } from "../../styles/styled";

const Teachers = () => (
  <section className="relative py-16">
    <section className="max-w-6xl mx-auto z-50 px-4 lg:px-0">
      <div className="max-w-3xl text-center mx-auto">
        <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
          Meet Our Teachers
        </h5>
        <h2 className="tracking-wide leading-snug lg:leading-normal text-3xl md:text-4xl lg:text-5xl mt-4 mb-5 font-bolder text-primary-900">
          Meet the Best Teachers
        </h2>
      </div>
      <div className="relative mt-5 pb-8 lg:pb-12">
        <TeachersSlider {...settings}>
          {Teachers_data.map((item, i) => {
            return (
              <div
                key={i}
                className="pt-3 border-2 border-primary-fade slick-cont text-center"
              >
                {/* <div className="img-box"> */}
                <img
                  src={require(`../../assets/img/${item.img}`)}
                  className="rounded-full mb-3"
                  alt="teacher"
                />
                {/* </div> */}
                <div className="flex flex-col space-y-3">
                  <h4 className="font-bold px-3 tracking-wide">{item.name}</h4>
                  <p className="tracking-widest text-xs uppercase px-3">
                    Teacher
                  </p>
                  {/* <p>{ item.desc }</p> */}
                  <div className="social-links bg-tag-section py-4">
                    <ul className="flex justify-center items-center space-x-4">
                      <li>
                        <a href="https://">
                          <FontAwesomeIcon
                            icon={faMediumM}
                            className="hover:text-primary-amber"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="hover:text-primary-amber"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="hover:text-primary-amber"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="hover:text-primary-amber"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </TeachersSlider>
      </div>
    </section>
  </section>
);

export default Teachers;
