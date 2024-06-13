import Header from "../components/Header";
import AtAGlance from "../components/AtAGlance";
import data from "../../public/data/about";

const About = () => {

  return (
    <div>
        <Header title='About Me' subtitle='Interests, Goals, & Who I Am' />
        <div className='about-container'>
          <div className='about-content'>
            <div className='about-body'>
              {
                data.map((d) => {
                  return (
                    <p key={d.key}>{d.text}</p>
                  )
                })
              }
            </div>
            <AtAGlance />
          </div>
      </div>
    </div>
  )
}

export default About
