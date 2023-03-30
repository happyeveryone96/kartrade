import React from 'react';
import Image from 'next/image';
import css from '../Card/Card.module.css';
import { CardType } from '@/types/card';
import { useRouter } from 'next/router';
import UserBox from '../UserBox/UserBox';

interface Props {
  card: CardType;
}

const Card: React.FC<Props> = ({ card }) => {
  const { mainImage, nickname, title, description, price, id } = card;
  const photoCard = mainImage.replace('/public', '');

  const router = useRouter();

  return (
    <div className={css.container}>
      <Image
        className={css.cardImg}
        src={photoCard}
        alt="사진"
        width={400}
        height={400}
        onClick={() =>
          router.push({
            pathname: `/card/${id}`,
          })
        }
      />
      <UserBox props={{ userImg: photoCard, userName: nickname }} />
      <div>
        <p className={css.title}>{title}</p>
        <p className={css.desc}>{description}</p>
        <p className={css.price}>USD ${price}</p>
      </div>
    </div>
  );
};

export default Card;
