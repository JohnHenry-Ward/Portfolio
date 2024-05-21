'use client'; // needed for side effects

import { useEffect, useState } from "react";
import { Rampart_One, Rammetto_One } from "next/font/google";

const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400' });
const rammetto_one = Rammetto_One({ subsets: ['latin'], weight: '400' });

const Home = () => {

  const splashTextOptions = ['Software Engineer', 'Problem Solver', 'Cat Dad', 'Plant Lover'];

  const [splashText, setSplashText] = useState('');

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * splashTextOptions.length);
    setSplashText(splashTextOptions[randomIndex]);

  }, [])

  return (
    <div id='main-content'>
      <div id='headshot-container'>

      </div>
      <div id='text-content'>
        <h1 id='text-name' className={`green ${rampart_one.className}`}>JohnHenry Ward</h1>
        <h4 id='text-splash' className={rammetto_one.className}>{splashText}</h4>
        <h6>Work In Progress</h6>
      </div>
    </div>
  );
}

export default Home;