import React from 'react';
import css from './CardDetail.module.css';

interface Desc {
  title: string;
  description: string;
  price: number;
}

interface Props {
  props: Desc;
}

const CardDetailDesc: React.FC<Props> = ({ props }: Props) => {
  const { title, description, price } = props;
  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      <p className={css.description}>{description}</p>
      <p className={css.price}>USD {price}</p>
      <p className={css.priceDesc}>Local Taxes included (where applicable)</p>
    </div>
  );
};

export default CardDetailDesc;
