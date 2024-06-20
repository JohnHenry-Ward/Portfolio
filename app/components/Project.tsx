'use client'; // needed for Image component

import React from 'react';
import Image from 'next/image';

const Project: React.FC<{ title: string, subtitle: string, body: string, imgName: string[], imgDesc: string[], link: string }> = ({ title, subtitle, body, imgName, imgDesc, link }) => {

    return (
        <div className='project-item-container'>
            <div className='project-text-container'>
                <h4 className='project-text-title'>{title}</h4>
                <h5 className='project-text-subtitle'>{subtitle}</h5>
                <div className='project-text-body'>{body}</div>
                {
                    link && <div className='project-text-link'><a href={link} target='_window'>GitHub Link</a></div>
                }
            </div>
            <div className='project-img-container'>
                <Image className='project-img' src={require(`../../public/images/${imgName[0]}`)} alt='Image of project' priority />
                <div className='project-img-text'>{imgDesc[0]}</div>
            </div>
        </div>
    )
}

export default Project
