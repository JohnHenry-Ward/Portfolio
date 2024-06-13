import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
        <a className='footer-link' href='https://www.linkedin.com/in/johnhenry-ward/' title='LinkedIn Link'>
            <FaLinkedin className='linkedin footer-icon' />
        </a>
        <a className='footer-link' href='https://github.com/JohnHenry-Ward' title='GitHub Link'>
            <FaGithub className='github footer-icon' />
        </a>
        <a className='footer-link' href='mailto:johnhenry514@gmail.com' title='Email Link - johnhenry514@gmail.com'>
            <FaEnvelope className='email footer-icon' />
        </a>
    </div>
  )
}

export default Footer
