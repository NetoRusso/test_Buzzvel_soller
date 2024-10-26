'use client';

import Button01 from '../Button01';
import Style from './Menu.module.scss';


const Menu = () => {

  return (
    <div className={Style.menu}>
      <div className={Style.menu__desktop}>
        <div className={Style.menu__desktop__left}>
          <p className={Style.menu__desktop__left__title}>soller</p>
          <ul className={Style.menu__desktop__left__list}>
            <li className={Style.menu__desktop__left__list__item}>
              <p>Products</p>
            </li>
            <li className={Style.menu__desktop__left__list__item}>
              <p>Solutions</p>
            </li>
            <li className={Style.menu__desktop__left__list__item}>
              <p>Services</p>
            </li>
            <li className={Style.menu__desktop__left__list__item}>
              <p>Configure</p>
            </li>
          </ul>
        </div>
        <div className={Style.menu__desktop__buttons}>
          <div className={Style.menu__desktop__buttons__phone}>
            <div className={Style.menu__desktop__buttons__phone__icon} />
            <p>555 818 282</p>
          </div>
          <Button01 />
        </div>
      </div>
    </div>
  );
}

export default Menu;
