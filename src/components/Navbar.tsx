"use client";

import React, {useState} from 'react'
import './Navbar.css'

export default function Navbar() {

  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='navbar-container'>
      <h1 className='navbar-name'>Jonathan</h1>
      <div id='navbar-links' className={clicked ? '#navbar-links active' : '#navbar-links'}>
        <a href='#home'>Home</a>
        <a href='#about'>About me</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className='navbar-mobile'>
      <img
          className={clicked ? 'menu-closed' : 'menu-open'}
          src='menu-portfolio.png'
          alt='menu'
          id='img-menu'
          onClick={handleMenuClick}
        />
        <img
          className={clicked ? 'menu-open' : 'menu-closed'}
          src='X-portfolio.png'
          alt='close'
          onClick={handleMenuClick}
        />
      </div>
    </div>
  )
}
