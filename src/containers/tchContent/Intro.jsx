import { useState, useEffect } from "react";
import Axios from "axios";
import { Alert, TYPE } from "../../components/alert/Alert";
// import { Link } from "react-router-dom";
import Image from "@material-tailwind/react/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../../assets/img/teach.jpeg";

const TchIntro = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setUrl(res.data.url);
      console.log(res.data.url);
    }).catch(()=>Alert('Image not added', TYPE.ERROR));
  }, []);
  console.log(url);
  return (
    <section className="relative mt-16 lg:mt-0">
      <div className="grid grid-cols-12 gap-y-0 gap-x-7 items-cente">
        <div className="md:col-span-4 col-span-full mb-10" data-aos="fade-up">
          <div className="flex flex-col space-y-4 items-center">
            <div className="img-box">
              <Image
                src={avatar}
                rounded={false}
                raised={true}
                alt="avatar"
                className="w-full img-fluid object-cover ring-4 ring-offset-4 shadow-norm ring-offset-gray-100"
              />
            </div>
            <p className="flex space-x-2 text-primary-amber text-xs text-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
        </div>
        <div className="md:col-span-8 col-span-full " data-aos="fade-down">
          <div className="info flex flex-col justify-center items-center md:items-start md:justify-start space-y-4">
            <h1 className="sm:text-3xl text-xl tracking-wide">
              Emerenini <span className="text-primary-900"> Cynthia.</span>
            </h1>
            <p className="tracking-wide text-gray-100">
              <span className="text-gray-300 pr-2">Speciality: </span> General
              Studies
            </p>
            <p className="tracking-wide text-gray-100">
              <span className="text-gray-300 pr-2">Level: </span> Junior
              Secondary
            </p>
            <div className="socials mt-3">
              <h2 className="sm:text-lg text-primary-900 after:absolute after:w-12 md:after:w-24 after:h-px after:bg-white after:top-1/2 after:left-24 relative">
                Connect
              </h2>
              <div className="flex space-x-5 items-center mt-5">
                <a
                  href="https://"
                  className="border border-primary-900 text-primary-900 rounded trans py-2 sm:py-3 px-4 sm:px-6 text-lg hover:border-primary-amber hover:text-primary-amber"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://"
                  className="border border-primary-900 text-primary-900 rounded trans py-2 sm:py-3 px-4 sm:px-6 text-lg hover:border-primary-amber hover:text-primary-amber"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://"
                  className="border border-primary-900 text-primary-900 rounded trans py-2 sm:py-3 px-4 sm:px-6 text-lg hover:border-primary-amber hover:text-primary-amber"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://"
                  className="border border-primary-900 text-primary-900 rounded trans py-2 sm:py-3 px-4 sm:px-6 text-lg hover:border-primary-amber hover:text-primary-amber"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="grid grid-cols-12 gap-y-6 gap-x-8 mt-16 md:mt-10">
        <div className="md:col-span-6 col-span-full">
          <h1 className="text-3xl bg-white bg-opacity-20 font-bold py-2 px-4 inline text-center md:text-left">
            About Teacher
          </h1>
          <p className="text-gray-100 font-medium leading-relaxed sm:text-base text-sm mt-8">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex.
          </p>
          <p className="text-gray-100 font-medium leading-relaxed sm:text-base text-sm">
            Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax
            jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking
            zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
            Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx
            zippy fowls. Few quips galvanized the mock jury box. Quick brown
            dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves
            quack! Blowzy red vixens fight for a quick jump.
          </p>
        </div>
        <div className="md:col-span-6 col-span-full">
          <h1 className="text-3xl bg-white bg-opacity-20 font-bold py-2 px-4 inline text-center md:text-left">
            Qualifications
          </h1>
        </div>
      </div>
    </section>
  );
};
export default TchIntro;
