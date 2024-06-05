'use client'; // needed for side effects

import React, { useEffect, useState } from 'react';
import { getRandomColor } from '../lib/splashText';

interface colorData {
  color: String,
  prevState: null
}

const Header: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {

  const [subtitleColor, setSubtitleColor] = useState<colorData | String>('');

  useEffect(() => {
    const color = getRandomColor();
    setSubtitleColor(color);
  }, []);


  return (
    <div className='header-container'>
      <h1 className='title green'>
        {title}
      </h1>
      <h4 className={`subtitle ${subtitleColor}`}>
        {subtitle}
      </h4>
    </div>
  )
}

export default Header
