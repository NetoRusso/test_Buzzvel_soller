'use client';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Image from 'next/image';
import Style from './Section03.module.scss';
import mobile from '/public/assets/images/mobile2.svg';

const Section03 = () => {

  return (
    <section className={Style.section03} aria-label='Powerful features'>
      <div className={Style.section03__texts}>
        <div className={Style.section03__texts__box1}>
          <span className={Style.section03__texts__box1__span}>
            System features
          </span>
          <h2 className={Style.section03__texts__box1__title}>
            Powerful features
          </h2>
          <p className={Style.section03__texts__box1__text}>
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <ScrollAnimation animateIn='animate__slideInLeft' duration={1} delay={300} animateOnce={true}>
        <div className={Style.section03__texts__box2}>
          <div className={Style.section03__texts__box2__box1}>
            <h4 className={Style.section03__texts__box2__box1__title}>
              Erat sit
            </h4>
            <p className={Style.section03__texts__box2__box1__text}>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className={Style.section03__texts__box2__box2}>
            <h4 className={Style.section03__texts__box2__box2__title}>
              Ullamcorper arcu
            </h4>
            <p className={Style.section03__texts__box2__box2__text}>
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.
            </p>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__slideInRight' duration={1} delay={300} animateOnce={true}>
        <div className={Style.section03__texts__box3}>
          <div className={Style.section03__texts__box3__box1}>
            <h4 className={Style.section03__texts__box3__box1__title}>
              Et pellentesque
            </h4>
            <p className={Style.section03__texts__box3__box1__text}>
              Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>
          <div className={Style.section03__texts__box3__box2}>
            <h4 className={Style.section03__texts__box3__box2__title}>
              Amet egestas
            </h4>
            <p className={Style.section03__texts__box3__box2__text}>
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </div>
        </ScrollAnimation>
      </div>
      <div className={Style.section03__design}>

        <div className={Style.section03__design__mobile}>
          <Image src={mobile} alt='Design for Mobile' />
        </div>

        <div className={Style.section03__design__bg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 573 1001" fill="none">
            <path d="M546.478 53.6569C737.795 -56.8002 982.432 8.75001 1092.89 200.068C1203.34 391.385 1137.79 636.021 946.479 746.478L600.068 946.479C408.751 1056.93 164.114 991.386 53.6567 800.069C-56.8004 608.751 8.74977 364.115 200.067 253.658L546.478 53.6569Z" fill="#FBBF24" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section03;
