import Image from 'next/image';
import React from 'react';
import css from './CardDetailImage.module.css';

interface Image {
  detailImage: string[];
}

interface Props {
  props: Image;
}

const CardDetailImage: React.FC<Props> = ({ props }: Props) => {
  const { detailImage } = props;
  const detailImages = detailImage.map((img) => img.replace('/public', ''));

  return (
    <div>
      {detailImages.map((img) => (
        <div key={img} className={css.cardBox}>
          <Image
            className={css.cardImg}
            src={img}
            alt="포토 카드"
            width={400}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

export default CardDetailImage;
