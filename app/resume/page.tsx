'use client'; // needed for side effects

import Image from 'next/image';
import { randomColorOrder } from '../lib/splashText';
import { useEffect, useState } from 'react';

interface colorData {
  color: String,
  prevState: null
}

const Resume = () => {

  const [textColors, setTextColors] = useState<colorData[] | String[]>([]);

  useEffect(() => {
    let colors = randomColorOrder();
    setTextColors(colors);
  }, []);

  return (
    <div className='resume-full-container'>

      <div className='float-text-container'>
        <h2 className={`float-text ${textColors[0]} rotate-one`}>Eager to Learn</h2>
        <h2 className={`float-text ${textColors[1]} rotate-two`}>Lots of Potential</h2>
        <h2 className={`float-text ${textColors[2]} rotate-three`}>A Joy to Work With</h2>
      </div>
      
      <div className='resume-download-container'>
        <div className='resume-img-container'>
          <Image className='resume-img' src={require('../../public/images/resume.jpg')} alt='Image of Resume' priority/>
        </div>
        <a className='resume-download' href={'./documents/JohnHenry_Ward_Resume.pdf'} download='JohnHenry_Ward_Resume.pdf'>Click to Download</a>
      </div>

      <div className='float-text-container' >
        <h2 className={`float-text ${textColors[3]} rotate-four`}>Very Professional</h2>
        <h2 className={`float-text ${textColors[4]} rotate-five`}>I'd Hire Him</h2>
        <h2 className={`float-text ${textColors[0]} rotate-six`}>Excellent Communicator</h2>
      </div>

    </div>
  )
}

export default Resume
