import React, { useState } from 'react';
import Minus from '../../public/icons/minus.png';
import Plus from '../../public/icons/plus.png';
import Image from 'next/image';
import css from './Quantity.module.css';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const minus = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={css.container}>
      <p className={css.quantity}>Quantity</p>
      <Image
        className={css.minus}
        src={Minus}
        alt="수량 감소"
        onClick={minus}
      />
      <p>{quantity}</p>
      <Image className={css.plus} src={Plus} alt="수량 증가" onClick={plus} />
    </div>
  );
};

export default Quantity;
