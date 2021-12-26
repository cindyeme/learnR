import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Transition from "../../components/utils/Transition";

const AboutStatements = () => {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <div className="grid md:grid-cols-12 md:gap-8 my-20">
      {/* Tabs buttons */}
      <div className="mb-8 md:mb-0 md:col-span-4" data-aos="fade-right">
        <div className="flex md:flex-col divide-x md:divide-y divide-primary-900 border border-primary-900 rounded-lg">
          <button
            className={`md:flex md:space-x-3 grow items-center p-4 font-semibold transition duration-300 ease-in-out focus:outline-none text-sm md:text-md rounded-l-lg md:rounded-bl-none md:rounded-t-lg ${
              tab !== 1
                ? "bg-grayish-light hover:bg-grayish-500"
                : "bg-primary-900"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} className="hidden md:block" />
            <span>Why LearnR</span>
          </button>
          <button
            className={`md:flex grow md:space-x-3 items-center p-4 font-semibold transition duration-300 ease-in-out focus:outline-none text-sm md:text-md ${
              tab !== 2
                ? "bg-grayish-light hover:bg-grayish-500"
                : "bg-primary-900"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} className="hidden md:block" />
            <span>Our Mission</span>
          </button>
          <button
            className={`md:flex grow md:space-x-3 items-center p-4 font-semibold transition duration-300 ease-in-out focus:outline-none text-sm md:text-md rounded-r-lg md:rounded-r-none md:rounded-b-lg ${
              tab !== 3
                ? "bg-grayish-light hover:bg-grayish-500"
                : "bg-primary-900"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(3);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} className="hidden md:block" />
            <span>Our Vision</span>
          </button>
        </div>
      </div>

      {/* Tabs items */}
      <div className="md:col-span-8 md:-mt-5" data-aos="fade-left" ref={tabs}>
        <div className="relative flex flex-col text-left">
          {/* Item 1 */}
          <Transition
            show={tab === 1}
            appear={true}
            className="w-full"
            enter="transition ease-in-out duration-700 transform order-first"
            enterStart="opacity-0 translate-y-16"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform absolute"
            leaveStart="opacity-100 translate-y-0"
            leaveEnd="opacity-0 -translate-y-16"
          >
            <div className="relative">
              <h3 className="underline underline-offset-8 font-bolder uppercase tracking-wider text-primary-900 mb-5 text-lg md:text-xl text-center md:text-left">Why LearnR</h3>
              <p className="leading-relaxed text-center md:text-left text-sm md:text-base font-medium">
                LearnR aims to bring together students and teachers on the
                community platform. We take our mission of increasing global
                access to quality education seriously. We connect learners to
                the best tutors and courses from around the world. The quick,
                brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
                quartz, vex nymphs. Waltz, bad
              </p>
              <hr className="text-primary-amber w-20 py-4 mt-5" />
              <ul className="list-disc lg:list-inside px-4 lg:px-0 flex flex-col space-y-2 text-sm font-medium">
                <li>Professional and Experienced</li>
                <li>
                  We Connect Learners To The Best Teachers From Around The World
                </li>
                <li>
                  Our Mission Is Increasing Global Access To Quality Education
                </li>
                <li>129k Online Available Notes</li>
              </ul>
            </div>
          </Transition>
          {/* Item 2 */}
          <Transition
            show={tab === 2}
            appear={true}
            className="w-full"
            enter="transition ease-in-out duration-700 transform order-first"
            enterStart="opacity-0 translate-y-16"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform absolute"
            leaveStart="opacity-100 translate-y-0"
            leaveEnd="opacity-0 -translate-y-16"
          >
            <div className="relative">
              <h3 className="underline underline-offset-8 font-bolder uppercase tracking-wider text-primary-900 mb-5 text-lg md:text-xl text-center md:text-left">Our Mission</h3>
              <p className="leading-relaxed text-center md:text-left text-sm md:text-base font-medium">
                LearnR aims to bring together students and teachers on the
                community platform. We take our mission of increasing global
                access to quality education seriously. We connect learners to
                the best tutors and courses from around the world. The quick,
                brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
                quartz, vex nymphs. Waltz, bad
              </p>
              <hr className="text-primary-amber w-20 py-4 mt-5" />
              <ul className="list-disc lg:list-inside px-4 lg:px-0 flex flex-col space-y-2 text-sm font-medium">
                <li>Professional and Experienced</li>
                <li>
                  We Connect Learners To The Best Teachers From Around The World
                </li>
                <li>
                  Our Mission Is Increasing Global Access To Quality Education
                </li>
                <li>129k Online Available Notes</li>
              </ul>
            </div>
          </Transition>
          {/* Item 3 */}
          <Transition
            show={tab === 3}
            appear={true}
            className="w-full"
            enter="transition ease-in-out duration-700 transform order-first"
            enterStart="opacity-0 translate-y-16"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform absolute"
            leaveStart="opacity-100 translate-y-0"
            leaveEnd="opacity-0 -translate-y-16"
          >
            <div className="relative">
              <h3 className="underline underline-offset-8 font-bolder uppercase tracking-wider text-primary-900 mb-5 text-lg md:text-xl text-center md:text-left">Our Vision</h3>
              <p className="leading-relaxed text-center md:text-left text-sm md:text-base font-medium">
                LearnR aims to bring together students and teachers on the
                community platform. We take our mission of increasing global
                access to quality education seriously. We connect learners to
                the best tutors and courses from around the world. The quick,
                brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
                quartz, vex nymphs. Waltz, bad
              </p>
              <hr className="text-primary-amber w-20 py-4 mt-5" />
              <ul className="list-disc lg:list-inside px-4 lg:px-0 flex flex-col space-y-2 text-sm font-medium">
                <li>Professional and Experienced</li>
                <li>
                  We Connect Learners To The Best Teachers From Around The World
                </li>
                <li>
                  Our Mission Is Increasing Global Access To Quality Education
                </li>
                <li>129k Online Available Notes</li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default AboutStatements;
