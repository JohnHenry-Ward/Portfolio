'use client'; // needed for Image component

import React from 'react';
import Image from 'next/image';

const Project: React.FC<{title: string, subtitle: string, body: string, imgName: string, imgDesc: string}> = ({ title, subtitle, body, imgName, imgDesc }) => {
    
    return (
    <div className='project-item-container'>
        <div className='project-text-container'>
            <h4 className='project-text-title'>{ title }</h4>
            <h5 className='project-text-subtitle'>{ subtitle }</h5>
            <div className='project-text-body'>{ body }</div>
        </div>
        <div className='project-img-container'>
            <Image className='project-img' src={require(`../../public/images/${imgName}`)} alt='Image of project' priority/>
            <div className='project-img-text'>{imgDesc}</div>
        </div>
    </div>
  )
}

export default Project
