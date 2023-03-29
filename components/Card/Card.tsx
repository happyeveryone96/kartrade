import React from 'react';
import Image from 'next/image';
import css from '../Card/Card.module.css';
import { CardType } from '@/types/card';

interface Props {
  card: CardType;
}

const Card: React.FC<Props> = ({ card }) => {
  const { mainImage, nickname, title, description, price } = card;
  const photoCard = mainImage.replace('/public', '');

  return (
    <div className={css.container}>
      <Image
        className={css.cardImg}
        src={photoCard}
        alt="사진"
        width={325}
        height={325}
      />
      <div className={css.userBox}>
        <Image
          className={css.userImg}
          src={photoCard}
          alt="유저 프로필 사진"
          width={38}
          height={38}
        />
        <p className={css.userName}>@{nickname}</p>
      </div>
      <div>
        <p className={css.title}>{title}</p>
        <p className={css.desc}>{description}</p>
        <p className={css.price}>USD ${price}</p>
      </div>
    </div>
  );
};

export default Card;
