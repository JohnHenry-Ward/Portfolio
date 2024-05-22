'use client'; // needed for side effects

import { useState } from "react";
import { Rampart_One, Rammetto_One } from "next/font/google";
import Image from "next/image";

const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400' });
const rammetto_one = Rammetto_One({ subsets: ['latin'], weight: '400' });

const Home = () => {

  const splashTextOptions = ['Software Engineer', 'Problem Solver', 'Cat Dad', 'Plant Lover'];
  const splashColorOptions = ['splash-blue', 'splash-brown', 'splash-purple', 'splash-orange', 'splash-yellow'];

  const [splashText, setSplashText] = useState('Software Engineer');
  const [splashColor, setSplashColor] = useState('splash-blue');

  setTimeout(() => {
    let randomIndexText = Math.floor(Math.random() * splashTextOptions.length);
    let randomIndexColor = Math.floor(Math.random() * splashColorOptions.length);
    setSplashText(splashTextOptions[randomIndexText]);
    setSplashColor(splashColorOptions[randomIndexColor]);
  }, 5000);

  return (
    <div id='main-content'>
      <div id='headshot-container'>
        <Image id='headshot' src={require('../../public/headshot.png')} width={250} height={250} alt="Picture of JohnHenry" />
      </div>
      <div id='text-content'>
        <h1 id='text-name' className={`green ${rampart_one.className}`}>JohnHenry Ward</h1>
        <h4 id='text-splash' className={`${splashColor} ${rammetto_one.className}`}>{splashText}</h4>
      </div>
    </div>
  );
}

export default Home;