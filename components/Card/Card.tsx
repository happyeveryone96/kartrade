import React from 'react';
import Image from 'next/image';
import PhotoCard from '../../public/photocard/photo1.svg';
import css from '../Card/Card.module.css';
import { CardType } from '@/types/card';

interface Props {
  card: CardType;
}

const Card: React.FC<Props> = ({card}) => {
  const { mainImage, nickname, title, description, price } = card;

  return (
    <div className={css.container}>
      <Image className={css.cardImg} src={PhotoCard} alt="사진" />
      <div className={css.userBox}>
        <Image className={css.userImg} src={PhotoCard} alt="유저 프로필 사진" />
        <p className={css.userName}>@{nickname}</p>
      </div>
      <div>
        <p className={css.title}>{title}</p>
        <p className={css.desc}>{description}</p>
        <p className={css.price}>USD ${price}</p>
      </div>
    </div>
  );
}

export default Card;
