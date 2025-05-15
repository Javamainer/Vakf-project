'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../scss/carousel.scss';

export default function MobileCarousel() {
  return (
    <div className="mobile-carousel-wrapper">
      <Swiper
        className="card-swiper"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>Карточка 1</SwiperSlide>
        <SwiperSlide>Карточка 2</SwiperSlide>
        <SwiperSlide>Карточка 3</SwiperSlide>
        <SwiperSlide>Карточка 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
