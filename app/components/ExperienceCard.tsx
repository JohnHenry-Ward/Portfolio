import React from 'react';

const ExperienceCard: React.FC<{ title: string, date: string, body: string[] }> = ({ title, date, body }) => {

  let p_id = 0;

  return (
    <div className='experience-item-container'>
      <div className='experience-header-container'>
        <h4 className='experience-title'>{title}</h4>
        <h4 className='experience-date'>{date}</h4>
      </div>
      <div className='experience-body'>
        {
          body.map((p) => {
            p_id++;
            return (
              <p key={p_id}>{p}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default ExperienceCard
