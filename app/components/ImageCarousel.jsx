'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import './css/carousel.css'; 

const images = [
  "/carousel/img1.jpeg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
  "/carousel/img4.jpg"
];

export default function ImageCarousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        className="custom-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <Image
              src={src}
              alt={`slide-${index}`}
              width={320}
              height={220}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
