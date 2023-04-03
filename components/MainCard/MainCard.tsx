import React from 'react';
import Image from 'next/image';
import PhotoCard from '../../public/photocard/main_cover.png';
import css from '../MainCard/MainCard.module.css';

function MainCard() {
  return (
    <div className={css.container}>
      <div className={css.cardBox}>
        <div className={css.card}>
          <Image className={css.mainImg} src={PhotoCard} alt="메인 이미지" />
        </div>
        <div className={css.text}>
          <p className={css.title}>We are creative traders</p>
          <p className={css.desc}>
            Sell, Trade, Buy all Kpop photocards across the World. We are here
            to enable K-Pop fans to instantly trade cards like never before.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
