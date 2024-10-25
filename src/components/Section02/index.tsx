'use client';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Image from 'next/image';
import Style from './Section02.module.scss';
import mobile from '/public/assets/images/mobile.svg';

const Section02 = () => {

  return (
    <section className={Style.section02} aria-label='Personalized services'>
      <div className={Style.section02__design}>
          <div className={Style.section02__design__mobile}>
            <Image src={mobile} alt='Design for Mobile' />
          </div>
          <div className={Style.section02__design__bg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 574 1001" fill="none">
              <path d="M27.0679 946.479C-164.249 1056.93 -408.886 991.386 -519.343 800.068C-629.8 608.751 -564.25 364.115 -372.933 253.657L-26.5221 53.6567C164.795 -56.8004 409.432 8.74977 519.892 200.067C630.342 391.385 564.792 636.021 373.479 746.478L27.0679 946.479Z" fill="#581C87" />
            </svg>
          </div>
      </div>
      <div className={Style.section02__texts}>
        <div className={Style.section02__texts__box1}>
          <span className={Style.section02__texts__box1__span}>
            Services
          </span>
          <h2 className={Style.section02__texts__box1__title}>
            Personalized services
          </h2>
          <p className={Style.section02__texts__box1__text}>
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <ScrollAnimation 
          animateIn='animate__slideInLeft' 
          duration={1} 
          delay={300}
          animateOnce={true}
          >
          <div className={Style.section02__texts__box2}>
            <div className={Style.section02__texts__box2__box1}>
              <h3 className={Style.section02__texts__box2__box1__title}>
                Et mauris
              </h3>
              <p className={Style.section02__texts__box2__box1__text}>
                Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
              </p>
            </div>
            <div className={Style.section02__texts__box2__box2}>
              <h3 className={Style.section02__texts__box2__box2__title}>
                Eget sit
              </h3>
              <p className={Style.section02__texts__box2__box2__text}>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation 
          animateIn='animate__slideInRight' 
          duration={1} 
          delay={300}
          animateOnce={true}
          >
          <div className={Style.section02__texts__box3}>
            <div className={Style.section02__texts__box3__box1}>
              <h3 className={Style.section02__texts__box3__box1__title}>
                Imperdiet pellentesque
              </h3>
              <p className={Style.section02__texts__box3__box1__text}>
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
              </p>
            </div>
            <div className={Style.section02__texts__box3__box2}>
              <h3 className={Style.section02__texts__box3__box2__title}>
                Non libero
              </h3>
              <p className={Style.section02__texts__box3__box2__text}>
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
              </p>

            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
};


export default Section02;
