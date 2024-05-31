import Header from "../components/Header";
import Project from "../components/Project";
import data from "../../public/data/project";

const Projects = () => {

  return (
    <div>
      <Header title='Projects' subtitle='Learning, Growing, & Passion' />
      <div className='project-container'>
        {
          data.map((pro) => {

            return (
              <Project title={pro.title} subtitle={pro.subtitle} body={pro.body} imgName={pro.imgName} imgDesc={pro.imgDesc} key={pro.key} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Projects
