'use client';

import { useEffect, useState } from 'react';
import ModileSwiper from './mobile-swiper';
import ImageCarousel from './ImageCarousel';

export default function ResponsiveSwiper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }

    // Вызов сразу
    handleResize();

    // Подписка на ресайз
    window.addEventListener('resize', handleResize);

    // Очистка
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <ModileSwiper /> : <ImageCarousel />;
}
