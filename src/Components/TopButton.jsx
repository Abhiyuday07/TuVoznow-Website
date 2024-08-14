import React, { useEffect, useState } from 'react';
import './TopButton.css'; 

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={topFunction}
      className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
      title="Go to top"
    >
      <img src="./Assets/images/topArrow.svg" alt="Go to top" />
    </button>
  );
};

export default TopButton;
