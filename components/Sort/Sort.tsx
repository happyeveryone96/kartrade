import React from 'react';
import css from './Sort.module.css';
import { useRouter } from 'next/router';

const Sort: React.FC = () => {
  const router = useRouter();
  const routerPush = (e: any) => {
    if (e.target.value === 'default') {
      router.push('/');
    } else {
      router.push(`?price=${e.target.value}`);
    }
  };

  return (
    <div className={css.container}>
      <select className={css.sortBox} onChange={routerPush}>
        <option value="default">Price ($)</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
