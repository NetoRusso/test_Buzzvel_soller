'use client';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css'

import Image from 'next/image';
import Style from './Section01.module.scss';
import screen from '/public/assets/images/Desktop.svg';

const Section01 = () => {

  return (
    <section aria-label="Pick the Sun" className={Style.section01}>
      <div className={Style.section01__text}>
        <p className={Style.section01__text__call}>No more waste</p>
        <h2 className={Style.section01__text__title}>Pick the Sun</h2>
        <p className={Style.section01__text__description}>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
      </div>
      <ScrollAnimation
        animateIn="animate__zoomIn"
        duration={1}
        delay={300}
        animateOnce={true}
      >
        <div className={Style.section01__screen}>
          <Image src={screen} alt="Screen" className={Style.section01__screen__image} />
        </div>
      </ScrollAnimation>
      <div className={Style.section01__circles}>
        <div className={Style.section01__circles__orange} />
        <div className={Style.section01__circles__space} >
          <div className={Style.section01__circles__space__purple} />
        </div>
      </div>

    </section>
  );
};

export default Section01;
