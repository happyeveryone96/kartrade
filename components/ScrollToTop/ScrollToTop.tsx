import React from 'react';
import Image from 'next/image';
import Top from '../../public/icons/top.png';
import css from './ScrollToTop.module.css';
import Circle from '../../public/icons/circle.png';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={css.container} onClick={scrollToTop}>
      <Image className={css.scrollToTop} src={Top} alt="상단으로 이동" />
      <Image className={css.circle} src={Circle} alt="버튼 테두리" />
    </div>
  );
};

export default ScrollToTop;
