import { Link } from 'react-router-dom';
import error_404 from '../../assets/img/error-404.svg';
import error_500 from '../../assets/img/error-500.svg';

// Error 404
export const Error4 = () => (
  <section className="max-w-5xl mx-auto px-5 pb-10 pt-16 sm:pt-10">
    <Link to="/learnR" className='text-center flex flex-col justify-center items-center'>
      <img src={error_404} alt="error" className="img-fluid" />
    </Link>
  </section>
);


// Error 500
export const Error5 = () => (
  <section className="max-w-5xl mx-auto px-5 pt-20 pb-10 md:py-10">
    <Link to="/learnR" className='text-center '>
      <img src={error_500} alt="error" className="img-fluid" />
    </Link>
  </section>
);
