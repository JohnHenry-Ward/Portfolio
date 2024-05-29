'use client'; // needed for side effects

import React, { useEffect, useState } from 'react';
import { getRandomColor } from '../lib/splashText';

interface colorData {
  color: String,
  prevState: null
}

const Header: React.FC<{title: string, subtitle: string}> = ({ title, subtitle }) => {

  const [subtitleColor, setSubtitleColor] = useState<colorData | String>('');

  useEffect(() => {
    const color = getRandomColor();
    setSubtitleColor(color);
  }, []);


  return (
    <div className='header-container'>
      <div className='title green'>
        {title}
      </div>
      <div className={`subtitle ${subtitleColor}`}>
        {subtitle}
      </div>
    </div>
  )
}

export default Header
