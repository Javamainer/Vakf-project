'use client';

import { useEffect, useState } from 'react';
import Header from './header.jsx';
import MiniHeader from './mini-header.jsx';
import MacroHeader from './macro-header.jsx';

export default function ResponsiveHeader() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (screenWidth <= 767) {
    return <MacroHeader />;
  } else if (screenWidth <= 1024) {
    return <MiniHeader />;
  } else {
    return <Header />;
  }
}
