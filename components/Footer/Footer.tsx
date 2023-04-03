import React from 'react';
import Image from 'next/image';
import Logo from '../../public/icons/logo.png';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.container}>
      <Image className={css.logo} src={Logo} alt="로고" />
      <div className={css.footerBox}>
        <p>ABOUT US</p>
        <p>TERMS OF SERVICE</p>
        <p>CONTACT </p>
        <p>PRIVACY POLICY</p>
      </div>
      <p className={css.copyRight}>
        © 2021 KARTRADE LIMITED - ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

export default Footer;
