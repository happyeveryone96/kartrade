import React from 'react';
import Image from 'next/image';
import css from './ScrollToTop.module.css';
import ScrollIcon from '../../public/icons/top-scroll-icon.svg';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Image
      onClick={scrollToTop}
      className={css.scrollToTop}
      src={ScrollIcon}
      alt="상단으로 이동"
    />
  );
};

export default ScrollToTop;
