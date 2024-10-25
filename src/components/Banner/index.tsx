'use client';


import Image from 'next/image';
import Button01 from '../Button01';
import Style from './Banner.module.scss';
import userPic from '/public/assets/images/User_Thumb.png';
import imgBanner from '/public/assets/images/banner_image.png';


const Banner = () => {
  return (
    <div className={Style.banner} >
      <div className={Style.banner__left}>
        <div className={Style.banner__left__text}>
          <h1 className={Style.banner__left__text__title}>
            Get the Sun to Power Your Home
          </h1>
          <p className={Style.banner__left__text__description}>
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
          </p>
          <Button01 />
        </div>
        <div className={Style.banner__left__coments}>
          <p className={Style.banner__left__coments__text}>
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className={Style.banner__left__coments__card}>
            <Image src={userPic} alt="user" className={Style.banner__left__coments__card__img} />
            <div className={Style.banner__left__coments__card__user}>
              <h3 className={Style.banner__left__coments__card__user__name}>
                Rwanda Melflor
              </h3>
              <p className={Style.banner__left__coments__card__user__site}>
                zerowaste.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image src={imgBanner} alt='Image Banner' className={Style.banner__right__img} />
    </div>
  );
}

export default Banner;
