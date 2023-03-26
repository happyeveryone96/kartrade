import React from 'react';
import Image from 'next/image';
import PhotoCard from '../../public/photocard/photo1.svg';
import css from '../Card/Card.module.css';

function Card() {
  return (
    <div className={css.container}>
      <Image className={css.cardImg} src={PhotoCard} alt="사진" />
      <div className={css.userBox}>
        <Image className={css.userImg} src={PhotoCard} alt="유저 프로필 사진" />
        <p className={css.userName}>@koreans1</p>
      </div>
      <div className={css.descriptionBox}>
        <p className={css.title}>Sumi Killer of Queen Collection photocards</p>
        <p className={css.desc}>
          I am getting out of kpop and need these cards gone ASAP. Only want to
          sell no trades but I am flexible with prices!! Just shoot me a
          comment..
        </p>
        <p className={css.price}>USD 199</p>
      </div>
    </div>
  );
}

export default Card;
