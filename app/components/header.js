'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import './css/header.css';
import Link from 'next/link';

export default function Header() {
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
  }, [menuRef]);

  return (
    <header>
      <Link href='/'><Image className='logo' src='/dumark_logo.svg' width={210} height={110} alt='logo' /></Link>
      <input
        className='search_bar'
        type='text'
        placeholder='Search...'
        maxLength={30}
      />
      <ul>
        <li><Link href='/about_us'>О нас</Link></li>
        <li><Link href='/about_vakf'>О Вакфах</Link></li>
        <li><Link href='/contact'>Контакти</Link></li>
        <li><Link href='/partners'>Партенри</Link></li>
        <li><Link href='/implemented'>Реалізовано</Link></li>
      </ul>

      <div className='settings-container' ref={menuRef}>
        <button className='gear-button' onClick={() => setMenuOpen(!menuOpen)}>
          <Image className='settings' src='/gear.svg' width={50} height={50} alt='settings' />
        </button>

        {menuOpen && (
          <div className='dropdown-menu'>
            <button>🌐 Мова</button>
            <button>🌙 Тема</button>
          </div>
        )}
      </div>
    </header>
  );
}
