import { Link } from 'react-router-dom';
import teacher from '../../assets/img/bb-teach.png';
import Button from '../../components/button/Button';

const Start = () => (
  <section className='relative'>
    <div className="grid grid-cols-12 gap-y-5 gap-x-7 items-center">
      <div className="md:col-span-7 col-span-full mb-10" data-aos="flip-up">
        <div className="flex flex-col space-y-4">
          <h2 className="tracking-wide lg:leading-normal text-3xl md:text-3xl lg:text-4xl font-bolder text-primary-900 text-center lg:text-left">
            Start Your Teaching Career Today With LearnR
          </h2>
          <p className="leading-relaxed text-center lg:text-left text-sm md:text-base font-medium">
            We take our mission of increasing global access to quality
            education seriously. We connect learners to the best tutors and
            courses from around the world. The quick, brown fox jumps over a
            lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
            by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
          </p>
          <div className="sm:pt-6 pt-4 text-center lg:text-left">
            <Button className="rounded-full ring ring-primary-900 ring-offset-2 !bg-primary-amber !px-5 !py-3">
              <Link to="/teachers-form">Click here to signup</Link>{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 col-span-full" data-aos="flip-down">
        <div className="img-box">
          <img src={teacher} alt="teacher" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);

export default Start;