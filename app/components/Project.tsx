'use client'; // needed for Image component

import React from 'react';
import Image from 'next/image';

const Project: React.FC<{ title: string, subtitle: string, body: string[], imgName: string[], imgDesc: string[], gh_link: string }> = ({ title, subtitle, body, imgName, imgDesc, gh_link }) => {
    
    let p_id = 0;

    return (
        <div className='project-item-container'>
            <div className='project-text-container'>
                <h4 className='project-text-title'>{title}</h4>
                <h5 className='project-text-subtitle'>{subtitle}</h5>
                <div className='project-text-body'>
                {
                    body.map((p) => {
                        p_id++;
                        return (
                        <p key={p_id}>{p}</p>
                        )
                    })    
                }
                </div>
                {
                    gh_link && <div className='project-text-link'><a href={gh_link} target='_window'>GitHub Link</a></div>
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
