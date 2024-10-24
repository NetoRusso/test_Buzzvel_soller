'use client';

import Image from 'next/image';
import Button02 from '../Button02';
import Style from './Section05.module.scss';
import macbook from '/public/assets/images/Macbook.svg';

const Section05 = () => {

  return (
    <section className={Style.section05} aria-label='All the power that you need for your house is now available'>
      <div className={Style.section05__header}>
        <div className={Style.section05__header__texts}>
          <span className={Style.section05__header__texts__span}>
            Get the Sun to power your home
          </span>
          <h2 className={Style.section05__header__texts__title}>
            All the power that you need for your house is now available
          </h2>
        </div>
        <div className={Style.section05__header__btn}>
          <Button02 />
          <p className={Style.section05__header__btn__text}>
            Egestas fringilla aliquam leo
          </p>
        </div>
      </div>
      <div className={Style.section05__img}>
        <Image src={macbook} alt='macbook' />
      </div>
      <div className={Style.section05__detail} />

    </section>
  );
};

export default Section05;
