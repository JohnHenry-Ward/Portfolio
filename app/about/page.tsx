import Header from "../components/Header";
import AtAGlance from "../components/AtAGlance";
import data from "../../public/data/about";

const About = () => {

  return (
    <div>
      <div className='about-container'>
        <Header title='About Me' subtitle='Interests, Goals, & Who I Am' />
        <div className='about-content'>
          <div className='about-body'>{data}</div>
          <AtAGlance />
        </div>
      </div>

    </div>
  )
}

export default About
