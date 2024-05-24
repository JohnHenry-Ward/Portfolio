'use client'; // needed for side effects

import { useEffect, useState } from "react";
import Image from "next/image";
import { Rampart_One, Rammetto_One } from "next/font/google";
import setSplash from "../lib/splashText";

const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400' });
const rammetto_one = Rammetto_One({ subsets: ['latin'], weight: '400' });

const Header = () => {

    const [splashText, setSplashText] = useState('');
    const [splashColor, setSplashColor] = useState('');
    const [getNewSplash, setGetNewSplash] = useState(true);

    useEffect(() => {
        const runSplash = async () => {
            await setSplash(setSplashText, setSplashColor);
            setGetNewSplash(!getNewSplash);
        }

        runSplash();
    }, [getNewSplash]);

    return (
        <div className='main-content'>
            <div className='headshot-container'>
                <Image className='headshot' src={require('../../public/headshot.png')} alt="Picture of JohnHenry" />
            </div>
            <div className='text-content'>
                <h1 className={`text-name green ${rampart_one.className}`}>JohnHenry Ward</h1>
                <div className='typing-container'>
                    <h4 id='splash-text' className={`text-splash ${splashColor} ${rammetto_one.className}`}><span className="splash-item">{'> '}</span>{splashText}</h4>
                    <span className='cursor'></span>
                </div>
            </div>
        </div>
    )
}

export default Header
