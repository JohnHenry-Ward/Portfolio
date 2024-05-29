'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname();

  return (
    <div className='navbar'>
      <Link className={`navbar-link`} href='/' >
        <h4 className={`navbar-text ${pathname === '/' ? 'green' : 'black'}`}>Home</h4>
      </Link>
      <Link className={`navbar-link`} href='/about' >
        <h4 className={`navbar-text ${pathname === '/about' ? 'green' : 'black'}`}>About Me</h4>
      </Link>
      <Link className={`navbar-link`} href='/experience' >
        <h4 className={`navbar-text ${pathname === '/experience' ? 'green' : 'black'}`}>Experience</h4>
      </Link>
      <Link className={`navbar-link`} href='/projects' >
        <h4 className={`navbar-text ${pathname === '/projects' ? 'green' : 'black'}`}>Projects</h4>
      </Link>
      <Link className={`navbar-link`} href='/resume' >
        <h4 className={`navbar-text ${pathname === '/resume' ? 'green' : 'black'}`}>Resume</h4>
      </Link>
    </div>
  )
}

export default NavBar
