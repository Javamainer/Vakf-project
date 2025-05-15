'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '../scss/header.scss';

export default function MacroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="mobile-header">
      <div className="mobile-header-top">
        <Link href='/'>
          <Image
            className='logo'
            src='/dumark_logo.svg'
            width={130}
            height={70}
            alt='logo'
            priority
          />
        </Link>

        <button className='burger-button' onClick={() => setMenuOpen(!menuOpen)}>
          <Image src='/burger.svg' width={35} height={35} alt='menu' />
        </button>
      </div>

      <div
        className={`mobile-menu-wrapper ${menuOpen ? 'open' : ''}`}
        ref={menuRef}
      >
        <div className="mobile-menu">
          <ul>
            <li><Link href='/about_us'>О нас</Link></li>
            <li><Link href='/about_vakf'>О Вакфах</Link></li>
            <li><Link href='/contact'>Контакти</Link></li>
            <li><Link href='/partners'>Партенри</Link></li>
            <li><Link href='/implemented'>Реалізовано</Link></li>
          </ul>
          <div className="dropdown-controls">
            <button>🌐 Мова</button>
            <button>🌙 Тема</button>
          </div>
        </div>
      </div>
    </header>
  );
}
