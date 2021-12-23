import React, { useState, useEffect } from 'react';
// import top from '../../assets/img/top.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => (window.pageYOffset > 300 ? setVisible(true) : setVisible(false));
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // window.addEventListener('scroll', toggleVisible);

  return (
    <div style={{ position: 'fixed', left: '90%', zIndex: 100, cursor: 'pointer', bottom: '40px' }}>
      <button onClick={scrollToTop} className={`focus:outline-none text-white bg-amber-500 hover:bg-amber-700 focus:bg-amber-400 active:bg-amber-800 shadow-md-amber shadow-lg-amber text-lg py-1 px-3 lg:px-4 lg:py-2  transition-all duration-300 ease-linear rounded-full ${visible ? 'inline' : 'hidden'}`}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default BackToTop;
