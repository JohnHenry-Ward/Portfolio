'use client'; // needed for side effects

import { useState, useEffect } from "react";
import { getRandomColor } from '../lib/splashText';

interface colorData {
    color: String,
    prevState: null
}

const AtAGlance = () => {
    const [subtitleColor, setSubtitleColor] = useState<colorData | String>('');

    useEffect(() => {
        const color = getRandomColor();
        setSubtitleColor(color);
    }, []);

    return (
        <div className='at-a-glance-container'>
            <div className='at-a-glance-item-container'>
                <h6 className='at-a-glance-item-header'>Languages</h6>
                <ul className='at-a-glance-item-list'>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                </ul>
            </div>
            <div className='at-a-glance-item-container'>
                <h6 className='at-a-glance-item-header'>Tools & tech</h6>
                <ul className='at-a-glance-item-list'>
                    <li>React</li>
                    <li>SQL</li>
                    <li>Node</li>
                    <li>Next</li>
                    <li>Git</li>
                </ul>
            </div>
            <div className='at-a-glance-item-container'>
                <h6 className='at-a-glance-item-header'>Work Values</h6>
                <ul className='at-a-glance-item-list'>
                    <li>Growth</li>
                    <li>Learning</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Teamwork</li>
                </ul>
            </div>
            <div className='at-a-glance-item-container'>
                <h6 className='at-a-glance-item-header'>Favorite Movies</h6>
                <ul className='at-a-glance-item-list'>
                    <li>The Shining</li>
                    <li>Knives Out</li>
                    <li>The Nice Guys</li>
                </ul>
            </div>
            <div className='at-a-glance-item-container'>
                <h6 className='at-a-glance-item-header'>My Teams</h6>
                <ul className='at-a-glance-item-list'>
                    <li>Mariners</li>
                    <li>Seahawks</li>
                    <li>Sounders</li>
                    <li>Kraken</li>
                </ul>
            </div>
        </div>
    )
}

export default AtAGlance
