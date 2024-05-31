import React from 'react';
import Image from 'next/image';

const Resume = () => {
  return (
    <div className='resume-full-container'>

      <div className='float-text-container'>
        <h2 className='float-text'>Eager to Learn</h2>
        <h2 className='float-text'>Lots of Potential</h2>
        <h2 className='float-text'>A Joy to Work With</h2>
      </div>
      
      <div className='resume-download-container'>
        <div className='resume-img-container'>
          <Image className='resume-img' src={require('../../public/images/resume.jpg')} alt='Image of Resume' />
        </div>
        <a className='resume-download' href='/JohnHenry_Ward_Resume.pdf' target="_blank" rel="noopener noreferrer" download>Click to Download</a>
      </div>

      <div className='float-text-container' >
        <h2 className='float-text'>Very Professional</h2>
        <h2 className='float-text'>I'd Hire Him</h2>
        <h2 className='float-text'>Excellent Communicator</h2>
      </div>

    </div>
  )
}

export default Resume
