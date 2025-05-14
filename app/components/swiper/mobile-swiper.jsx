'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../scss/carousel.scss'; 

export default function ModileSwiper() {
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="card-swiper"
    >
      <SwiperSlide>Карточка 1</SwiperSlide>
      <SwiperSlide>Карточка 2</SwiperSlide>
      <SwiperSlide>Карточка 3</SwiperSlide>
      <SwiperSlide>Карточка 4</SwiperSlide>
    </Swiper>
  );
}
