'use client';

import { useEffect, useState } from 'react';
import Header from './header.jsx';
import MiniHeader from './mini-header.jsx';

export default function ResponsiveHeader() {
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

  return isMobile ? <MiniHeader /> : <Header />;
}
