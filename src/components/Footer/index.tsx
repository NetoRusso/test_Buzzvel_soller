'use client';

import Image from 'next/image';
import Style from './Footer.module.scss';
import logo from '/public/assets/icons/Logo-grey.svg';

const Footer = () => {

  return (
    <footer className={Style.footer}>
      <div className={Style.footer__left}>
        <Image src={logo} alt='Logo for Soller' />
        <p className={Style.footer__left__copy}>
          @ 2023 Soller, Inc. All rights reserved.
        </p>
      </div>
      <div className={Style.footer__right} >
        <ul className={Style.footer__right__list}>
          <li> 
            <p>Terms</p>
          </li>
          <li>
            <p>Privacy</p>
          </li>
          <li>
            <p>Support</p>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
