import React from 'react'

const Header: React.FC<{title: string, subtitle: string}> = ({ title, subtitle }) => {
  return (
    <div>
      <div className='title'>
        {title}
      </div>
      <div className='subtitle'>
        {subtitle}
      </div>
    </div>
  )
}

export default Header
