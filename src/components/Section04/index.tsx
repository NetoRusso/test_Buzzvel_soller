'use client';

import Button02 from '../Button02';
import Slide from '../Slide';
import Style from './Section04.module.scss';
import coments from '../../data/coments.json';


const Section04 = () => {

  return (
    <section className={Style.section04} aria-label='Make something awesome'>
      <div className={Style.section04__header}>
        <div className={Style.section04__header__texts}>
          <span className={Style.section04__header__texts__span}>
            Join other Sun harvesters
          </span>
          <h2 className={Style.section04__header__texts__title}>
            Make something awesome
          </h2>
          <p className={Style.section04__header__texts__text}>
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
          </p>
          
        </div>
        <Button02 />
      </div>
        <Slide data={coments} />
    </section>
  );
};

export default Section04;
