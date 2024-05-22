import { Rampart_One } from "next/font/google";
import Link from "next/link";
const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400' });

const NavBar = () => {
  return (
    <div id="navbar" className={rampart_one.className}>
      <Link className="navbar-link" href='/'>
        <h4 className="navbar-text">Home</h4>
      </Link>
      <Link className="navbar-link" href='/about'>
        <h4 className="navbar-text">About Me</h4>
      </Link>
      <Link className="navbar-link" href='/experience'>
        <h4 className="navbar-text">Experience</h4>
      </Link>
      <Link className="navbar-link" href='/'>
        <h4 className="navbar-text">Projects</h4>
      </Link>
      <Link className="navbar-link" href='/'>
        <h4 className="navbar-text">Resume</h4>
      </Link>
    </div>
  )
}

export default NavBar
