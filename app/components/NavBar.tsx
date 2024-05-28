'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {

  const pathname = usePathname();

  const [linkColors, setLinkColors] = useState({
    'home': 'green',
    'about': 'black',
    'experience': 'black',
    'projects': 'black',
    'resume': 'black'
  });

  const onClick = (currentPage: String) => {
    const newLinkColors = {
      'home': currentPage == 'home' ? 'green' : 'black',
      'about': currentPage == 'about' ? 'green' : 'black',
      'experience': currentPage == 'experience' ? 'green' : 'black',
      'projects': currentPage == 'projects' ? 'green' : 'black',
      'resume': currentPage == 'resume' ? 'green' : 'black',
    }

    setLinkColors(newLinkColors);
  }


  return (
    <div className='navbar'>
      <Link className="navbar-link" href='/' onClick={(e) => onClick('home')}>
        <h4 className={`navbar-text ${linkColors['home']}`}>Home</h4>
      </Link>
      <Link className="navbar-link" href='/about' onClick={(e) => onClick('about')}>
        <h4 className={`navbar-text ${linkColors['about']}`}>About Me</h4>
      </Link>
      <Link className="navbar-link" href='/experience' onClick={(e) => onClick('experience')}>
        <h4 className={`navbar-text ${linkColors['experience']}`}>Experience</h4>
      </Link>
      <Link className="navbar-link" href='/projects' onClick={(e) => onClick('projects')}>
        <h4 className={`navbar-text ${linkColors['projects']}`}>Projects</h4>
      </Link>
      <Link className="navbar-link" href='/resume' onClick={(e) => onClick('resume')}>
        <h4 className={`navbar-text ${linkColors['resume']}`}>Resume</h4>
      </Link>
    </div>
  )
}

export default NavBar
