'use client'; // needed for side effects

import { useEffect, useState } from "react";
import Image from "next/image";
import { setSplash } from "./lib/splashText";

const Home = () => {

    const [splashText, setSplashText] = useState('');
    const [splashIndex, setSplashIndex] = useState(0);
    const [splashColor, setSplashColor] = useState('');
    const [getNewSplash, setGetNewSplash] = useState(true);
    const [firstRun, setFirstRun] = useState(true);

    useEffect(() => {
        const runSplash = async () => {
            await setSplash(setSplashText, setSplashColor, firstRun, splashIndex, setSplashIndex);
            setGetNewSplash(!getNewSplash);
        }

        runSplash();
        setFirstRun(false);
    }, [getNewSplash]);

    return (
        <div className='main-content'>
            <div className='headshot-container'>
                <Image className='headshot' src={require('./../public/headshot.png')} alt="Picture of JohnHenry" priority={true} />
            </div>
            <div className='text-content'>
                <h1 className='text-name green'>JohnHenry Ward</h1>
                <div className='typing-container'>
                    <h4 id='splash-text' className={`text-splash ${splashColor}`}><span className="splash-item">{'> '}</span>{splashText}</h4>
                    <span className='cursor'></span>
                </div>
            </div>
        </div>
    )
}

export default Home
