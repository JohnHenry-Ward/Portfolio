import React from 'react';

const ExperienceCard: React.FC<{ title: string, date: string, body: string }> = ({ title, date, body }) => {
  return (
    <div className='experience-item-container'>
      <div className='experience-header-container'>
        <h4 className='experience-title'>{title}</h4>
        <h4 className='experience-date'>{date}</h4>
      </div>
      <div className='experience-body'>
        {body}
      </div>
    </div>
  )
}

export default ExperienceCard
