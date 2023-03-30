import React from 'react';
import Icon from '../../public/icons/icon.png';
import Menu from '../../public/icons/menu.png';
import Search from '../../public/icons/search.png';
import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={css.container}>
      <Link href="/">
        <Image className={css.icon} src={Icon} alt="메인 아이콘" />
      </Link>
      <div className={css.rightBox}>
        <Image
          className={`${css.icon} ${css.search}`}
          src={Search}
          alt="검색"
        />
        <Image className={`${css.icon} ${css.menu}`} src={Menu} alt="메뉴" />
      </div>
    </div>
  );
}

export default Header;
