import React from 'react';
import css from './Sort.module.css';
import { useRouter } from 'next/router';

type PriceSort = 'default' | 'lowToHigh' | 'highToLow'

const Sort: React.FC = () => {
  const router = useRouter();
  const routerPush = (e: PriceSort) => {
    if (e === 'default') router.push('/');
    else router.push(`?price=${e}`);
  };

  return (
    <div className={css.container}>
      <select
        className={css.sortBox}
        onChange={(e) => routerPush(e.target.value as PriceSort)}
      >
        <option value="default">Price ($)</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
