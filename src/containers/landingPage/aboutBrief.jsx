// import aboutImg from '../../assets/img/female-teach.svg';
import aboutImg from '../../assets/img/course-appp.svg';
// import aboutImg from '../../assets/img/teacher.svg';
import Button from '../../components/Button/Button';

const AboutBrief = () => (
  <section className="relative container mx-auto">
    <div className="grid lg:grid-cols-12 gap-x-6">
      <div className="col-span-full lg:col-span-6">
        <div className="img-box relative">
          <img src={aboutImg} alt="about-img" className="img-fluid z-50" />
        </div>
      </div>
      <div className="col-span-full lg:col-span-6">
        <div className="about-brief">
          <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
            About us
          </h5>
          <h2 className="tracking-wide leading-normal my-5 text-5xl font-bolder text-primary-900">
            129+ Courses Online from Best Teachers
          </h2>
          <p className="leading-relaxed">
            LearnR aims to bring together students and teachers on the community
            platform. We take our mission of increasing global access to quality
            education seriously. We connect learners to the best tutors and
            courses from around the world. The quick, brown fox jumps over a
            lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced
            by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
          </p>
          <hr className="text-primary-amber w-20 py-4 mt-5" />
          <ul className="list-disc list-inside flex flex-col space-y-3">
            <li>Professional and Experienced</li>
            <li>
              We Connect Learners To The Best Teachers From Around The World
            </li>
            <li>Our Mission Is Increasing Global Access To Quality Education</li>
            <li>129k Online Available Notes</li>
          </ul>
          <div className="mt-10">
            <Button className="rounded-full">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutBrief;