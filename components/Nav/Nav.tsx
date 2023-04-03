import Link from 'next/link';
import React from 'react';
import css from './Nav.module.css';
import Right from '../../public/icons/chevron-right.png';
import Image from 'next/image';

function Nav() {
  return (
    <div className={css.container}>
      <Link className={css.home} href="/">
        Home
      </Link>
      <Image src={Right} alt="화살표" />
      <span className={css.detail}>Card Detail</span>
    </div>
  );
}

export default Nav;
