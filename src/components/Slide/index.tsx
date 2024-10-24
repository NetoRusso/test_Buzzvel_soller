'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Style from './Slide.module.scss';
import './slide.scss';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';



interface IProps {
  data: {
    name: string;
    value: string;
    text: string;
    photo: string;
  }[];
}




const Slide = ({ data }: IProps) => {




  return (
    <div className={Style.slide}>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        navigation={{
          prevEl: "#prevEl",
          nextEl: "#nextEl"
        }}
        loop={true}
        slideActiveClass='swiper-slide-active'
        pagination={{ clickable: true, }}
        modules={[Pagination, Navigation]}
        className={Style.slide__carousel}
      >

        {data.map((data, index) => (
          <SwiperSlide key={index} className={Style.slide__carousel__card}>
            <div className={Style.slide__carousel__card__space} />
            <p className={Style.slide__carousel__card__text}>{data.text}</p>
            <div className={Style.slide__carousel__card__user}>
              <Image src={data.photo} alt={data.name} width={64} height={64} />
              <div className={Style.slide__carousel__card__user__card}>
                <p className={Style.slide__carousel__card__user__card__name}>{data.name}</p>
                <p className={Style.slide__carousel__card__user__card__value}>{data.value}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={Style.slide__btns}>

        <button id='prevEl' className={Style.slide__btns__prev} />

        <button id='nextEl' className={Style.slide__btns__next} />
      </div>
    </div>
  );
}

export default Slide;